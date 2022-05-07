/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("dotenv").config()
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      shibuya: {
         url: "https://evm.shibuya.astar.network",
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
