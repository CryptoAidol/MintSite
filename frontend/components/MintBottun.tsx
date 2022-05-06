import mintNFT from '../../scripts/mint-nft.js'
import Link from 'next/link'
import React from 'react'
import { ethers } from "ethers"
import toast, { Toaster } from 'react-hot-toast'

const style = {
    mintBottun: `flex items-center justify-center w-64 bg-50% bg-[#f797e7] text-white text-xl px-4 font-black rounded-full shadow-xl hover:bg-[#fcdef7] hover:text-[#f797e7] cursor-pointer`,
}
const abi = [
    "function mint() public onlyAidol"
]
const contractAddress = "0x019fCb71b440Cb524b019d4C8c260a50cC34224c"
const notify = () => toast('NFTおくっちゃうん')
const tokenId = "100"

function MintBottun () {
  console.log("MintButton")

  const MetaMaskConnect = async () =>{
    console.log("MetaMaskConnect")
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
  
    const accounts =  await provider.send("eth_requestAccounts", []);
      
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.mint();
    toast('NFTおくっちゃうん')
  };

    // const [walletAddress, setWalletAddress] = useState("")
    // async function requestAccount() {
    //     console.log('Requesting account...')
    //     // Check if Meta Mask Extension exists 
    //     if(window.ethereum) {
    //       console.log('detected')
    
    //       try {
    //         const accounts = await window.ethereum.request({
    //           method: "eth_requestAccounts",
    //         });
    //         setWalletAddress(accounts[0])
    //         mintNFT("ipfs://QmQcxqVUJoefCzAKJ1iFneGu4NUa7jJ3gjqsSmJJXb7WQc")
    //       } catch (error) {
    //         console.log('Error connecting')
    //       }
    //     } else {
    //       alert('Meta Mask not detected')
    //     }
    //   }
        
    
    return (
      <div className={style.mintBottun}>
        <button onClick={MetaMaskConnect}>mint!</button>
        <Toaster />
      </div>
    )
}

export default MintBottun;