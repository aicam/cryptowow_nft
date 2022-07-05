// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    uint public tokenCount;
    mapping(uint256 => uint256) public itemIds;
    constructor() ERC721("DecentraWoW NFT", "DNFT"){}
    function mint(uint256 _itemId) external returns(uint) {
        tokenCount ++;
        _safeMint(msg.sender, tokenCount);
        itemIds[tokenCount] = _itemId;
        return(tokenCount);
    }
}