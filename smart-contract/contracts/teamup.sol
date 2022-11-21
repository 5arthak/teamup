// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract teamup is ERC721URIStorage{

     uint256 TEAMUP_TOKEN_ID;
     constructor() ERC721("teamupNFT", "TN"){}
     function postMatch(address _userOne, address _userTwo, string memory tokenURI) public{
        _mint(_userOne, TEAMUP_TOKEN_ID);
        _setTokenURI(TEAMUP_TOKEN_ID, tokenURI);
        TEAMUP_TOKEN_ID++;

        _mint(_userTwo, TEAMUP_TOKEN_ID);
        _setTokenURI(TEAMUP_TOKEN_ID, tokenURI);
        TEAMUP_TOKEN_ID++;
     }
}
