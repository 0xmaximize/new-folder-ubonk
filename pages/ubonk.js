'use client';
import { BuyNavbar, BuyFooter, WalletContextProvider} from '../components'
import { Buy } from '../sections';
import Head from 'next/head';

const Ubonk = () => {
    return (
      <>
      <Head>
        <title>$UBONK Presale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <container>
        <div className='bg-gray-900 overflow-hidden'>
          <WalletContextProvider>
          <BuyNavbar />
          <Buy />
          <BuyFooter />
          </WalletContextProvider>
    </div>
    </container>
    </>
  );
}

export default Ubonk;
