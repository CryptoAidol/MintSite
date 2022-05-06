// import mintNFT from '../../scripts/mint-nft.js'
import Link from 'next/link'
import {useState} from 'react'

const style = {
    headerIcon: `flex items-center justify-end bg-[#f797e7] text-white text-xl px-4 font-black rounded-full shadow-xl hover:bg-[#fcdef7] hover:text-[#f797e7] cursor-pointer`,
  }

function MintBottun () {
    const [walletAddress, setWalletAddress] = useState("")
    async function requestAccount() {
        console.log('Requesting account...')
    
        // Check if Meta Mask Extension exists 
        if(window.ethereum) {
          console.log('detected')
    
          try {
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setWalletAddress(accounts[0])
            // mintNFT("ipfs://QmQcxqVUJoefCzAKJ1iFneGu4NUa7jJ3gjqsSmJJXb7WQc")
          } catch (error) {
            console.log('Error connecting')
          }
        } else {
          alert('Meta Mask not detected')
        }
      }
    
    return (
          <Link href="/">
            <div className={style.headerIcon}>
              <button onClick={requestAccount}>
                mint!</button>
            </div>
          </Link>
    )
}

export default MintBottun;