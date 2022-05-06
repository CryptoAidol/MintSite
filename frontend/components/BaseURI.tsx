import Link from 'next/link'
import { ethers } from 'ethers'
import CryptoAidol from '../../artifacts/contracts/CryptoAidolContracts.sol/CryptoAidol.json'

const style = {
    headerIcon: `flex items-center justify-end bg-[#f797e7] text-white text-xl px-4 font-black rounded-full shadow-xl hover:bg-[#fcdef7] hover:text-[#f797e7] cursor-pointer`,
  }

const baseURIButton = () => {

    const cryptoAidolAddress = "0x54f3727DfDADa3E32bE9793E8ba48Ee815f5D05d"

    const baseURI = async () => {
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
          let nftTx = await cryptoAidolContract.testURI()
          console.log(nftTx)

           await fetch(nftTx,{cache: 'no-cache'})
           .then((response) => {
               return (response.json())
           })
           .then((json) => {
               console.log(json.image)
           })
           
        }
      }
    
      return (
        <>
          <div className={style.headerIcon}>
            <button onClick={baseURI}>
              hello!</button>
          </div>
        </>
  )
}

export default baseURIButton;