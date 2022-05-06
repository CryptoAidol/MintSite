/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {useState} from 'react'
import cryptoaidolLogo from '../assets/cryptoaidolLogo.png'
import { ethers } from 'ethers';



const style = {
  wrapper: `bg-[#87c1f5] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#e6e9ed] hover:text-white cursor-pointer`,
  headerIcon: `right-10 absolute top-4 py-1 px-5 flex items-center justify-end bg-[#f797e7] text-white text-xl px-4 font-black rounded-full shadow-xl hover:bg-[#fcdef7] hover:text-[#f797e7] cursor-pointer`,
}

function Header() {

  const [walletAddress, setWalletAddress] = useState("")
  const [connBottunText, setConnBottunText] = useState('connect wallet')

  // Requests access to the user's META MASK WALLET
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
        setConnBottunText('wallet connected')
      } catch (error) {
        console.log('Error connecting')
      }
    } else {
      alert('Meta Mask not detected')
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
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
          <button onClick={requestAccount}>
            {connBottunText}</button>
        </div>
      </Link>
    </div>
  )
}
export default Header;