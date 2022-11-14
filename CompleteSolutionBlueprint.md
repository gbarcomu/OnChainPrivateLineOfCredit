

# Withdraw flow

## Important
This piece of code hasn't been ever executed, compiled or audited. It's just a blueprint of how the complete withdraw process may work.

Use it at your own risk.

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
    uint256 _disposedAmountHash;
    uint256 _newDisposedAmountHash;

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

## Noir Circuit

```
use dep::std;

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