import type { NextPage } from 'next'
import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MintBottun from '../components/MintBottun';
import BaseURI from '../components/BaseURI'

const Home: NextPage = () => {
  const [mintNum, setMintNum] = useState(0);
  const [saleFlag, setSaleFlag] = useState(false);
  return (
    <>
      <Header />
        <div className="flex flex-wrap justify-center bg-[url('/Cyrptoaidol_BG.png')] bg-no-repeat bg-cover">
          <div className='px-44 py-52 text-center'>
            <h1 className="text-sm lg:text-5xl pt-1 text-[#4D4D4D] font-semibold ">Larn To Earn</h1>
            <h1 className="text-sm lg:text-5xl pt-8 text-[#4D4D4D] font-semibold ">Next Coming soon</h1>
            <Image className="object-none" src="/Cryptyaidle.svg" alt="Main Image" width={500} height={500}/>
          </div>
          <div className="px-44 py-44 bg-[url('/button_area.png')] text-center bg-center bg-contain bg-no-repeat">
              <Image src="/aidol.png" alt="Main Image" width={300} height={300}/>
              <h3 className="text-xs lg:text-4xl text-black font-semibold ">NFT Initial Sale</h3>
              <h1 className="text-sm lg:text-2xl pt-1 text-black font-semibold ">START DATE: Coming soon</h1>
              <h1 className="text-sm lg:text-2xl pt-1 text-black font-semibold ">14:00(UTC) | 23:00(JST)</h1>
              <h1 className="text-base lg:text-5xl pt-1 pb-2 text-black font-semibold "> {mintNum} / 3000</h1>
              <h1 className="text-base lg:text-5xl pt-1 pb-2 text-black font-semibold ">Sale is not yet</h1>
          </div>
        </div>
        <Footer />
    </>
  )  
  
}

export default Home
