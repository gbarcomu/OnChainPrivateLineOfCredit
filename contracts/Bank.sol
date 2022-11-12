// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./USDFoo.sol";
import "./TurboVerifier.sol";


contract Bank {

    event lineSuccessfullyCreated(bool);
    event tokensSuccessfullyCreated(uint256);

    mapping(uint256 => UserStatus) userId_userStatus;

    USDFoo usdFoo;
    TurboVerifier turboVerifier;

    struct UserStatus { 
      bytes32 maximumAllowanceHash;
      bytes32 disposedAmountHash;
      bytes32 interestRateHash;
      bytes32 accruedInterestsHash;
   }

    constructor(address USDFooAddress, address turboVerifierAddress) {
        usdFoo = USDFoo(USDFooAddress);
        usdFoo.mint(100000000000000);
        turboVerifier = TurboVerifier(turboVerifierAddress);
    }

    function withdrawWithProof(bytes calldata proof, uint256 userId) public {
        bytes32 _maximumAllowanceHash;
        assembly {
                _maximumAllowanceHash := calldataload(add(calldataload(0x04), 0x24))
        }
        require(_maximumAllowanceHash == userId_userStatus[userId].maximumAllowanceHash, "Maximum amount not correct");
        require(turboVerifier.verify(proof) == true, "Not valid proof");
        usdFoo.transfer(msg.sender, 100); //TODO Extract amount from the proof
        emit tokensSuccessfullyCreated(100);
    }

    function verifyProof(bytes calldata proof) public view returns (bool) {
       bool isGood = turboVerifier.verify(proof);
       return isGood;
    }

    function getMaximumAmount(bytes calldata proof) public view returns (bytes32) {
        bytes32 _maximumAllowanceHash;
        assembly {
                _maximumAllowanceHash := calldataload(add(calldataload(0x04), 0x24))
        }
       return _maximumAllowanceHash;
    }

    // NOTE: This function should be onlyOwner, however, for the shake of the demo, can be accessed by anyone
    function openLineOfCredit(uint256 userId, bytes32 _maximumAllowanceHash, bytes32 _disposedAmountHash,
      bytes32 _interestRateHash, bytes32 _accruedInterestsHash) public {
        //TODO Check user not exists
        userId_userStatus[userId] = UserStatus(_maximumAllowanceHash, _disposedAmountHash, _interestRateHash, _accruedInterestsHash);
        emit lineSuccessfullyCreated(true);
    }

    function getLineOfCredit(uint256 userId) public view returns(bytes32, bytes32, bytes32, bytes32){
        UserStatus memory userStatus = userId_userStatus[userId];
        return (
                userStatus.maximumAllowanceHash,
                userStatus.disposedAmountHash,
                userStatus.interestRateHash,
                userStatus.accruedInterestsHash
        );
    }
    
}
