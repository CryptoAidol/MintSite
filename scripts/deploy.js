const hre = require("hardhat");

async function main() {
    const CryptoAidolContract = await ethers.getContractFactory("CryptoAidol")
  
    // Start deployment, returning a promise that resolves to a contract object
    const cryptoAidol = await CryptoAidolContract.deploy()
    await cryptoAidol.deployed()
    console.log("Contract deployed to address:", cryptoAidol.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  
