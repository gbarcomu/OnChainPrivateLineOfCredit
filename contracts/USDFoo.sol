// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDFoo is ERC20 {

    constructor() ERC20("USDFoo", "USDF") {
    }

    function mint(uint256 amount) public { // Free tokens for everyone, don't do it in production!
        _mint(msg.sender, amount);
    }

    function decimals() public pure override returns (uint8) {
        return 2;
    }
}
