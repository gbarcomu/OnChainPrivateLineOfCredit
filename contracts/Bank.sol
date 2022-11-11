// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./USDFoo.sol";

contract Bank {

    mapping(uint256 => UserStatus) userId_userStatus;
    USDFoo usdFoo;

    struct UserStatus { 
      bytes32 maximumAllowanceHash;
      bytes32 disposedAmountHash;
      bytes32 interestRateHash;
      bytes32 accruedInterestsHash;
   }

    constructor(address USDFooAddress) {
        usdFoo = USDFoo(USDFooAddress);
        usdFoo.mint(100000000000000);
    }

    // NOTE: This function should be onlyOwner, however, for the shake of the demo, can be accessed by anyone
    function openLineOfCredit(uint256 userId, bytes32 _maximumAllowanceHash, bytes32 _disposedAmountHash,
      bytes32 _interestRateHash, bytes32 _accruedInterestsHash) public returns (bool){
        //TODO Check user not exists
        userId_userStatus[userId] = UserStatus(_maximumAllowanceHash, _disposedAmountHash, _interestRateHash, _accruedInterestsHash);
        return true;
    }

    
}
