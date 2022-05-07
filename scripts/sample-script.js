
const { ethers } = require("ethers");
const CryptoAidol = require("../artifacts/contracts/CryptoAidolContracts.sol/CryptoAidol.json"); 

const contractAddress = '0x71B8d76f5a65C1137F8B9A14097EF7a4Aa739555'

 async function mint(){
  
  // eslint-disable-next-line prefer-const
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner()

  const CryptoAidolContract = new ethers.Contract(contractAddress, CryptoAidol.abi,signer)

  await CryptoAidolContract.mint();

  // blockchain.approve = async function () {
  //   console.log('ap 1')
  //   if (typeof window.ethereum !== 'undefined') {
  //     await this.setSigner()
  //     console.log('ap 2')
  //     const contract = new ethers.Contract(
  //       contractAddress,
  //       CryptoAidol.abi,
  //       signer
  //     )
  //     console.log('ap 3')
  //     // const approveTx = await contract.approve(
  //     //   USDCShibuyaContractAddress,
  //     //   this.utils.parseUnitsToString(this.rawNftPrice, 'wei'),
  //     //   overrides
  //     // )
  //     // await approveTx.wait()
  //   }
  // }

  // blockchain.mint = async function () {
  //   console.log('mint Nft')
  //   if (typeof window.ethereum !== 'undefined') {
  //     await this.setSigner()
  //     const contract = new ethers.Contract(
  //       contractAddress,
  //       CryptoAidol.abi,
  //       signer
  //     )
  //     const tx = await contract.mint()
  //   }
  // }
}

mint()