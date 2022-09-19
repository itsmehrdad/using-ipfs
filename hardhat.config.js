require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('2bb0d1449db512787da1','292a3b0e90b30f66dfae578ebf3c22ffb133508b3470eebe405909d7e6adaf16');


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};

