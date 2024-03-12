// 'use client'
import styles from "../styles";
import { Button, Divider, Card } from "@nextui-org/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const AirdropSection = () => {
  const { connected, publicKey, disconnect } = useWallet();
  const [solBalance, setSolBalance] = useState(null);
  const [ubonkBalance, setUbonkBalance] = useState(null);
  const [bonkBalance, setBonkBalance] = useState(null);
  const [specificTokenBalance, setSpecificTokenBalance] = useState(null);

  useEffect(() => {
    const getBalances = async () => {
      try {
        if (!connected || !publicKey) {
          return;
        }
    
        const connection = new Connection('https://cool-clean-friday.solana-mainnet.quiknode.pro/5d4f1cb01a8c07492695c52553b7b7d525926a7f/');
        const solBalance = await connection.getBalance(publicKey);
        setSolBalance(solBalance / 10 ** 9);
    
        // Use await to handle the asynchronous operation
        try {
          const bonkBalance = await getBonkBalance(publicKey);
          setBonkBalance(parseFloat(bonkBalance));
          setSpecificTokenBalance(parseFloat(bonkBalance));
        } catch (error) {
          console.error("Error fetching BONK balance:", error);
          setBonkBalance(0);
          setSpecificTokenBalance(0);
        }
        // Use await to handle the asynchronous operation
        try {
          const ubonkBalance = await getUbonkBalance(publicKey);
          setUbonkBalance(parseFloat(ubonkBalance));
          setSpecificTokenBalance(parseFloat(ubonkBalance));
        } catch (error) {
          console.error("Error fetching UBONK balance:", error);
          setUbonkBalance(0);
          setSpecificTokenBalance(0);
        }
      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    };

    getBalances();
  }, [connected, publicKey]);

  const getBonkBalance = async (publicKey) => {
    try {
      const connection = new Connection('https://cool-clean-friday.solana-mainnet.quiknode.pro/5d4f1cb01a8c07492695c52553b7b7d525926a7f/');
      const tokenPublicKey = new PublicKey('DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263');
      const tokenBalances = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        {
          programId: TOKEN_PROGRAM_ID,
        }
      );
  
      const bonkBalance = tokenBalances.value.find(
        (account) => account.account.data.parsed.info.mint.toString() === tokenPublicKey.toString()
      );
  
      return bonkBalance ? bonkBalance.account.data.parsed.info.tokenAmount.amount : "0";
    } catch (error) {
      console.error("Error fetching UBONK balance:", error);
      return "0";
    }
  };

  const getUbonkBalance = async (publicKey) => {
    try {
      const connection = new Connection('https://cool-clean-friday.solana-mainnet.quiknode.pro/5d4f1cb01a8c07492695c52553b7b7d525926a7f/');
      const tokenPublicKey = new PublicKey('8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5');
      const tokenBalances = await connection.getParsedTokenAccountsByOwner(
        publicKey,
        {
          programId: TOKEN_PROGRAM_ID,
        }
      );
  
      const ubonkBalance = tokenBalances.value.find(
        (account) => account.account.data.parsed.info.mint.toString() === tokenPublicKey.toString()
      );
      return ubonkBalance ? ubonkBalance.account.data.parsed.info.tokenAmount.amount : "0";
    } catch (error) {
      console.error("Error fetching UBONK balance:", error);
      return "0";
    }
  };
  
  return (
    <section className={`justify-center items-center my-20 py-20`}>

      <div className={`${styles.xPadding} text-white lg:mx-3 px-3 z-10`}>
        <div className="flex justify-center items-center ">
          <div className="justify-center items-center ">
            <div className="flex justify-center items-center text-center">
             
            </div>     

            <div className="rounded-3xl p-1 bg-gradient-to-r from-sky-400 via-green-400 to-yellow-200 border-white md:w-[580px]">
              <div className="bg-gray-900 rounded-3xl py-8 px-6">
                {connected ? (
                  <>
                    <div className="flex justify-center items-center gap-4">
                    </div>
                    <div className="">
                      <h4 className="text-center py-4">Congratulations, you received</h4>
                      <div className="flex justify-center items-center gap-2  ">
                        <h4 className="text-center font-extrabold text-white text-4xl md:text-4xl lg:text-6xl">
                        {ubonkBalance > 1000 ? '500.000' : 'Not Eligible'}
                        </h4>
                        <img src='UBONK.png' alt=''  className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] object-contain"/>
                      </div>
                      
                      <div className=' justify-center items-center '>
                        <h4 className="text-center text-sm mt-10 my-4 text-white/50">
                          Eligibility breakdown
                        </h4>
                        <div className="border border-gray-400/20 rounded-xl bg-gray-800">
                          <div className="flex border-b border-gray-300/20">
                            <div className="flex-1 border-r border-slate-300/20 p-4 text-center">Hold JUP</div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center"> <FaCircleXmark className='text-gray-600/75 '/></div>
                          </div>

                          <div className="flex border-b border-gray-300/20">
                            <div className="flex-1 border-r border-slate-300/20 p-4 text-center">Hold BONK</div>
                              <div className="flex-1 p-4 text-center flex justify-center items-center"> 
                                <FaCircleXmark className='text-gray-600/75 '/>
                              </div>
                          </div>

                          <div className="flex border-b border-gray-300/20">
                            <div className="flex-1 border-r border-slate-300/20 p-4 text-center">
                              Hold UBONK
                            </div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center">
                              {ubonkBalance > 1000000 ? <FaCircleCheck className='text-emerald-500 ' />:<FaCircleXmark className='text-gray-600/75 '/>}
                            </div>
                          </div>

                          <div className="flex border-b border-slate-300/20">
                            <div className="flex-1 border-r border-gray-300/20 p-4 text-center">Discord OG</div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center"> <FaCircleXmark className='text-gray-600/75 '/></div>
                          </div>
                          <div className="flex">
                            <div className="flex-1 border-r border-gray-300/20 p-4 text-center">Airdrop Forms</div>
                            <div className="flex-1 p-4 text-center flex justify-center items-center"> <FaCircleXmark className='text-gray-600/75 '/></div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-6">
                      <h4 className="text-center font-mono font-bold text-xs md:text-sm">
                         You can check your qualify criteria above.
                        </h4> 
                        <h4 className="text-center font-mono text-xs lg:text-sm my-2">
                          Once you qualify, you can claim your airdrop rewards when the claim period has started on 03/20/2024. Find the criteria details here
                        </h4> 
                      </div>  
                      <Divider className="bg-white/10 my-4" />
                      <div className="flex justify-center items-center mt-4">
                        <Button size="sm" variant="light" onClick={disconnect} className="font-bold text-white/50">disconnect</Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="px-8 py-10 justify-center items-center">
                      <div className="text-center justify-center items-center text-sm">
                        <h4 className="text-4xl text-white font-extrabold">$UBONK AIRDROP</h4>
                      </div>
                      <div className="flex justify-center mt-8 my-6 items-center">
                        <span className="text-white/50 text-sm text-center">Connect wallet to enter an airdrop</span>
                      </div>
                      <div className="flex justify-center items-center">
                        <WalletMultiButton style={{ padding: '30px', paddingLeft: '50px', paddingRight: '50px', background: '#d17f2c', borderRadius: '10px' }}> Enter Airdrop </WalletMultiButton>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AirdropSection;
