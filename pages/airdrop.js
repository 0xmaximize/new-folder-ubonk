'use client';
import { BuyNavbar, BuyFooter, WalletContextProvider} from '../components'
import { AirdropSection, Accordions, HeroAirdrop } from '../sections';
import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
const Ubonk = () => {
    return (
      <>
      <Head>
        <title>$UBONK Airdrop</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"  />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />      
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <container>
          <WalletContextProvider>
          <div className='bg-hero overflow-hidden'>
          <BuyNavbar />
          <HeroAirdrop />
          </div>
       
          <div className='bg-gray-900 overflow-hidden'>
          <AirdropSection />
          <Spacer y={200} />
          <Accordions />
          <Spacer y={200} />

          <BuyFooter />
    </div>
    </WalletContextProvider>
    </container>
    </>
  );
}

export default Ubonk;
