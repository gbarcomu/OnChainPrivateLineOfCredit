# Withdraw flow

## Important
This piece of code hasn't been ever executed, compiled or audited. It's just a blueprint of how the complete withdraw process may work.

Use it at your own risk.

## Noir Circuit

```
fn main(userSecretKey: Field, withdraw: pub Field, totalAllowance: Field, totalAllowanceHash: pub Field, 
    disposedAmount: Field, disposedAmountHash: pub Field) -> pub Field {

    let _totalAllowanceHash = std::hash::pedersen([totalAllowance, userSecretKey]);
    constrain _totalAllowanceHash[0] == totalAllowanceHash;

    let _disposedAmountHash = std::hash::pedersen([disposedAmount, userSecretKey]);
    constrain _disposedAmountHash[0] == disposedAmountHash;

    let withdrawInt = withdraw as u24;
    let disposedAmountInt = disposedAmount as u24;
    let totalAllowanceInt = totalAllowance as u24;

    let newTotalDisposedAmountInt = disposedAmountInt + withdrawInt;
    let newTotalDisposedAmount = newTotalDisposedAmountInt as Field;

    constrain newTotalDisposedAmountInt <= totalAllowanceInt;

    let newTotalDisposedAmountHash = std::hash::pedersen([newTotalDisposedAmount, userSecretKey]);
    newTotalDisposedAmountHash[0]
}
```

## Solidity Smart Contract

```solidity
mapping(uint256 => UserStatus) userId_userStatus;

struct UserStatus { 
    bytes32 maximumAllowanceHash;
    bytes32 disposedAmountHash;
    bytes32 interestRateHash;
    bytes32 accruedInterestsHash;
}

function withdrawWithProof(bytes calldata proof, uint256 userId) public {
    bytes32 _maximumAllowanceHash;
    uint256 _amount;
    bytes32 _disposedAmountHash;
    bytes32 _newDisposedAmountHash;

    assembly {
        _maximumAllowanceHash := calldataload(add(calldataload(0x04), 0x24))
        _amount := calldataload(add(calldataload(0x04), 0x44))
        _disposedAmountHash := calldataload(add(calldataload(0x04), 0x64))
        _newDisposedAmountHash := calldataload(add(calldataload(0x04), 0x84))
    }

    require(_maximumAllowanceHash == userId_userStatus[userId].maximumAllowanceHash, "Maximum amount not correct");
    require(_disposedAmountHash == userId_userStatus[userId].disposedAmountHash, "Disposed amount not correct");
    require(turboVerifier.verify(proof) == true, "Not valid proof");

    userId_userStatus[userId].disposedAmountHash = _newDisposedAmountHash;

    usdFoo.transfer(msg.sender, _amount);
    emit tokensSuccessfullyTransfered(_amount);
}
```

# Complete Flow -> Withdraw and Amortization with interests

## Legend

- {parameter}h: Parameter hashed
- n{parameter}: New parameter
- IW: Is a Withdrawal? (if false is an Amortization)
- IR: Interest Rate
- TA: Total Allowance
- A: Amount
- DA: Disposed Amount
- AI: Accrued Interest
- SK: Secret Key
- T0: Last Withdrawal or Amortization Timestamp
- T1: Current Timestamp
- ph: Pedersen Hash

## NoirCircuit

Pseudocode

```

main(IW pub, SK, W pub, TA, TAh pub, DA, DAh pub, AI, AIh pub, IR, IRh pub, T0 pub, T1 pub) {

    constrain ph(TA, SK) == TAh
    constrain ph(DA, SK) == DAh
    constrain ph(AI, SK) == AIh
    constrain ph(IR, SK) == IRh

    if(IW) {
        (nDA, nAI) = witdraw(A, TA, DA, AI, IR, T0, T1)
    }
    else {
        (nDA, nAI) = amortize(A, TA, DA, AI, IR, T0, T1)
    }

    return ph(nDA), ph(nAI)
}

withdraw(A, TA, DA, AI, IR, T0, T1) {

    constrain A + DA <= TA

    nAI = AI + DA * (T1 - T0) * IR
    nDA = A + DA

    return nDA, nAI
}

amortize(A, TA, DA, AI, IR, T0, T1) {

    nAI = AI + DA * (T1 - T0) * IR

    constrain A >= nAI
    constrain DA >= A - nAI

    nDA = DA - (A - nAI)
    nAI = 0

    return nDA, nAI
}
```

## Solidity Smart Contract

```solidity

mapping(uint256 => UserStatus) userId_userStatus;

struct UserStatus { 
    bytes32 maximumAllowanceHash;
    bytes32 disposedAmountHash;
    bytes32 interestRateHash;
    bytes32 accruedInterestHash;
    uint256 lastOperationTimestamp;
}

function operationWithProof(bytes calldata proof, uint256 userId, bool isWithdraw) public {
    bool _isWithdraw;
    bytes32 _maximumAllowanceHash;
    uint256 _amount;
    bytes32 _disposedAmountHash;
    bytes32 _newDisposedAmountHash;
    bytes32 _accruedInterestHash;
    bytes32 _interestRateHash;
    uint256 _lastOperationTimestamp;
    uint256 _presentTimestamp;

    assembly {
        _isWithdraw := calldataload(add(calldataload(0x04), 0x24))
        _maximumAllowanceHash := calldataload(add(calldataload(0x04), 0x44))
        _amount := calldataload(add(calldataload(0x04), 0x64))
        _disposedAmountHash := calldataload(add(calldataload(0x04), 0x84))
        _accruedInterestHash := calldataload(add(calldataload(0x04), 0xa4))
        _interestRateHash := calldataload(add(calldataload(0x04), 0xc4))

        _lastOperationTimestamp := calldataload(add(calldataload(0x04), 0xe4))
        _presentTimestamp := calldataload(add(calldataload(0x04), 0x104))

        _newDisposedAmountHash := calldataload(add(calldataload(0x04), 0x124))
        _newAccruedInterestsHash := calldataload(add(calldataload(0x04), 0x144))
    }

    require(_maximumAllowanceHash == userId_userStatus[userId].maximumAllowanceHash, "Maximum amount not correct");
    require(_disposedAmountHash == userId_userStatus[userId].disposedAmountHash, "Disposed amount not correct");
    require(_accruedInterestHash == userId_userStatus[userId].accruedInterestHash, "Accrued interest not correct");
    require(_interestRateHash == userId_userStatus[userId].interestRateHash, "Interest rate not correct");

    require(_presentTimestamp + 5 minutes >= block.timestamp + 5 minutes, "Expired proof");
    require(_lastOperationTimestamp == userId_userStatus[userId].lastOperationTimestamp, "Expired proof");

    require(turboVerifier.verify(proof) == true, "Not valid proof");

    if(!_isWithdraw) {
        usdFoo.transferFrom(msg.sender, address(this), _amount);
    }

    userId_userStatus[userId].disposedAmountHash = _newDisposedAmountHash;
    userId_userStatus[userId].accruedInterestHash = _newAccruedInterestsHash;
    userId_userStatus[userId].lastOperationTimestamp = _presentTimestamp;

    if(_isWithdraw) {
        usdFoo.transfer(msg.sender, _amount);
    }

    emit tokensSuccessfullyTransfered(_amount);
}
```