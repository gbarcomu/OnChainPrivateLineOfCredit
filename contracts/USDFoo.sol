// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDFoo is ERC20 {

    constructor() ERC20("USDFoo", "USDF") {
        _mint(msg.sender, 10000000000000000);
    }

    function decimals() public pure override returns (uint8) {
        return 2;
    }
}
