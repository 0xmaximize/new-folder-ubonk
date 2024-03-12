import Head from 'next/head';
import '../styles/globals.css';
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletContextProvider } from '../components'

function MyApp({ Component, pageProps }) {
  return(
    <>    
    <Head>
      <title>Unibonk - Meme Ecosystem #1 on Solana</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <WalletContextProvider>
      <NextUIProvider>
        <main className="">    
        <ToastContainer 
          position="top-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
          <Component {...pageProps} />
        </main>
      </NextUIProvider>      
      </WalletContextProvider> 
    </>
  )
}

export default MyApp;