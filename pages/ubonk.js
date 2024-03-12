'use client';
import { BuyNavbar, BuyFooter, WalletContextProvider} from '../components'
import { Buy } from '../sections';
import { useState, useEffect } from 'react';

const Ubonk = () => {
    return (
      <container>
        <div className='bg-gray-900 overflow-hidden'>
          <WalletContextProvider>
          <BuyNavbar />
          <Buy />
          <BuyFooter />
          </WalletContextProvider>
    </div>
    </container>
  );
}

export default Ubonk;
