// import mintNFT from '../../scripts/mint-nft.js'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { ethers } from 'ethers'
import CryptoAidol from '../../artifacts/contracts/CryptoAidolContracts.sol/CryptoAidol.json'

const style = {
  mintBottun: `ml-5 w-64 bg-50% bg-[#f797e7] text-white text-xl font-black rounded-full shadow-xl hover:bg-[#fcdef7] hover:text-[#f797e7] cursor-pointer`,
}


function MintBottun () {
    // const [mintedNFT, setMintedNFT] = useState(null)
    // const [miningStatus, setMiningStatus] = useState(null)
    const [loadingState, setLoadingState] = useState(0)
    const [txError, setTxError] = useState(null)

    const cryptoAidolAddress = "0x2815C71B631F52dF1447eBa717A8c45dAE80233c"

    

    const mint = async () => {
      try {
        console.log("start")
        const { ethereum } = window
  
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum)
          const signer = provider.getSigner()
          const cryptoAidolContract = new ethers.Contract(
            cryptoAidolAddress,
            CryptoAidol.abi,
            signer
          )
          console.log("aaa")
          let nftTx = await cryptoAidolContract.mint()
          console.log('Mining....', nftTx.hash)
          // setMiningStatus(0)
  
          let tx = await nftTx.wait()
          setLoadingState(1)
          console.log('Mined!', tx)
          // let event = tx.events[0]
          // let value = event.args[2]
          // let tokenId = value.toNumber()
  
          console.log(
            `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`
          )
  
          // getMintedNFT(tokenId)
        } else {
          console.log("Ethereum object doesn't exist!")
        }
      } catch (error) {
        console.log('Error minting character', error)
        // setTxError(error.message)
      }
    }
    return (
          <Link href="/">
            <div className={style.mintBottun}>
              <button onClick={mint}>
                mint!</button>
            </div>
          </Link>
    )
}

export default MintBottun;