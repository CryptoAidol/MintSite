/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {useState, useEffect} from 'react'
import cryptoaidolLogo from '../assets/cryptoaidolLogo.png'
import { ethers } from 'ethers';



const style = {
  wrapper: `bg-[#87c1f5] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#e6e9ed] hover:text-white cursor-pointer`,
  headerIcon: `flex items-center justify-end bg-[#f797e7] text-white text-xl px-4 font-black rounded-full shadow-xl hover:bg-[#fcdef7] hover:text-[#f797e7] cursor-pointer`,
}

function Header() {

  const [walletAddress, setWalletAddress] = useState("")
  const [connBottunText, setConnBottunText] = useState('connect wallet')
  const [correctNetwork, setCorrectNetwork] = useState(false)

  // Requests access to the user's META MASK WALLET
  async function checkIfWalletIsConnected() {
    console.log('Requesting account...')

    const { ethereum } = window
    
    // Check if Meta Mask Extension exists 
    if(ethereum) {
      console.log('detected')
    } else {
      alert('Pls Metamask not detected')
    }
    
    let accounts = await ethereum.request({ medthod: 'eth_accounts'})

    if(accounts.length !== 0) {
      console.log('Found authorized Account: ', accounts[0])
      setWalletAddress(accounts[0])
    } else {
      console.log("No authorized account found")
    }
}


const checkCorrectNetwork = async () => {
  const { ethereum } = window
  let chainId = await ethereum.request({ method: 'eth_chainId' })
  console.log('Connected to chain:' + chainId)

  const shibuyaChainId = '0x51'

  if (chainId !== shibuyaChainId) {
    setCorrectNetwork(false)
  } else {
    setCorrectNetwork(true)
  }
}

useEffect(() => {
  // checkIfWalletIsConnected()
  checkCorrectNetwork()
}, [])

  // Create a provider to interact with a smart contract
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId'})
      console.log('Connected to chain:' + chainId)

      const shibuyaChainId = '0x51'

      if (chainId !== shibuyaChainId) {
        alert('You are not connected to the Shibuya Testnet!')
        return
      }
        
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setWalletAddress(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }


  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={cryptoaidolLogo} height={40} width={125} />
          <div className={style.logoText}>Crypto Aidol</div>
        </div>
      </Link>

      <div className={style.headerItems}>
        <Link href="/">
          <div className={style.headerItem}> page </div>
        </Link>
        <Link href="/">
          <div className={style.headerItem}> page </div>
        </Link>
        <Link href="/">
          <div className={style.headerItem}> page </div>
        </Link>
        <Link href="/">
          <div className={style.headerItem}> page </div>
        </Link>
      </div>
      <Link href="/">
        <div className={style.headerIcon}>
          <button onClick={connectWallet}>
            {connBottunText}</button>
        </div>
      </Link>
    </div>
  )
}
export default Header;