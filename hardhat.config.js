require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { PRIVATE_KEY, PRIVATE_KEY2, NFT_URL } = process.env;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
      chainId: 33981
    },
    polygon_mumbai: {
      url: NFT_URL,
      accounts: [`0x${PRIVATE_KEY}`, `0x${PRIVATE_KEY2}`]
    }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  mocha: {
    timeout: 100000000
  },
};
