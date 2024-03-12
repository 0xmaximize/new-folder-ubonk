'use client'
import styles from "../styles";
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { MdOutlineArrowOutward } from 'react-icons/md';

import { FaTelegramPlane, FaMedium } from 'react-icons/fa';

const communityLinks = [
    {
      title: "Telegram Channel",
      description:"Ask general question and chat with the worldwide community on Telegram.",
      to:"/",
      icon:"telegram"
      
    },
    {
        title: "Twitter",
        description:"Follow us @unibonk on twitter to get the latest news & update.",
        to:"/",
        icon:"twitter"
        
      },
      {
        title: "Discord Server",
        description:"Get in touch with us on Discord server's & become the UNIBONK! Community.",
        to:"/",
        icon:"discord"
        
      },
   
  ]

const icons = {
    discord: <BsDiscord className='text-white text-[32px] lg:text-[30px]' />,
    twitter: <BsTwitter className='text-white text-[32px] lg:text-[30px]'/>,
    telegram: <FaTelegramPlane className='text-white text-[32px] lg:text-[30px]' />,
    arrow : <MdOutlineArrowOutward className='text-white' size={18}/>,
}

const Community = () => {
  return (
    <section className={`${styles.Upadding} lg:mx-20 lg:px-20`}>
      <div className={`${styles.xPadding}  mx-4 md:px-4 `}>
        <div className="grid md:flex md:justify-center lg:justify-between items-center">    
            <div className="text-start">
              <span className='text-white/50  md:text-[16px] font-black'>
                  UNIBONK COMMUNITY
              </span>
              <h1 className="font-black text-3xl lg:text-5xl text-white mt-2 md:mt-4 md:max-w-[350px] lg:max-w-[600px]">
                Meet our community across the world and the universe.</h1>
              <p className={`text-white/50 flex my-4 md:max-w-[560px]`}>
              Join the fast-growing UNIBONK community and connect with innovators around the world to build the best era of memes in the future.
              </p>         
            </div>

            <div className="grid justify-center items-center">
            {communityLinks.map((data, index) => (       
             <div key={index} className="flex justify-start items-start gap-6 py-6 lg:py-8">
                <span className="items-center ">                
                    {icons[data.icon]}
                </span>
                <div className="justify-center items-center grid gap-2 max-w-[340px]">
                    <div className="flex gap-1">  
                    <h4 className="flex items-center gap-1 text-xl text-white font-bold"> {data.title}</h4>
                    <span className="mt-[-6px]"> {icons.arrow}</span>
                    </div>
                    <span className={`text-white/50 font-normal`}>{data.description}</span>
                </div>
             </div>
            ))}
          </div>
        </div>   
      </div>
    </section>
  );
};

export default Community;
