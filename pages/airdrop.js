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
        <link rel="icon" href="/favicon.ico" />
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

          <BuyFooter />
    </div>
    </WalletContextProvider>
    </container>
    </>
  );
}

export default Ubonk;
