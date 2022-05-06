import Link from 'next/link'
import Image from 'next/image'

import React from 'react'
import twitter from '../assets/twitter.png'
import discord from '../assets/discord.png'
import cryptoaidolLogo from '../assets/cryptoaidolLogo.png'

  const style = {
    wrapper: `bg-[#9ea4b0] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    footerItems: ` flex items-center justify-end`,
    footerItem: `text-white px-4 font-bold text-[#e6e9ed] hover:text-white cursor-pointer`,
    footerIcon: `flex items-center bg-[#f797e7] text-white text-xl px-4 font-black rounded-full shadow-xl hover:bg-[#fcdef7] hover:text-[#f797e7] cursor-pointer`,
  } 
  
  function Footer () {
    return (
      <div className={style.wrapper}>
        <Link href="/">
          <div className={style.logoContainer}>
            <Image src={cryptoaidolLogo} height={40} width={125} />
            <div className={style.logoText}>Crypto Aidol</div>
          </div>
        </Link>
        
        <div className={style.footerItems}>
            <div className={style.footerItem}> Join us → </div>
          <Link href="https://discord.gg/wVeXbdyB">
          <div className={style.logoContainer}>
            <Image src={discord} height={40} width={40} />
            <div className={style.footerItem}> Discord </div>
            </div>
          </Link>
          <Link href="https://twitter.com/crypto111977836">
          <div className={style.logoContainer}>
            <Image src={twitter} height={40} width={40} />
            <div className={style.footerItem}> Twitter </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
   export default Footer;