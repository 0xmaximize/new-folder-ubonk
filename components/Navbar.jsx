'use client';
import React, { useState } from "react";
import {
  Button, Popover, PopoverTrigger, PopoverContent, Image
} from "@nextui-org/react";
import { ChevronDown } from "./Icon.jsx";
import Link from "next/link";
import { useRouter } from 'next/router';
import { RiMenuFill } from 'react-icons/ri'
import { BsDiscord, BsTwitterX , } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    router.push(link);
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor " size={12} />,
  };
  
  return (
    <section className='w-full bg-gray-900'>
      <div className="flex justify-between mx-4 md:mx-6 lg:mx-20 lg:px-20  py-4">
        <div className="flex items-center justify-between md:gap-4 lg:gap-20">
          <RiMenuFill   className='flex md:hidden text-white' size={40} />
          <Link href='/'>
            <div className="hidden md:flex  justify-center items-center gap-2 ">
              <Image src='UBONK.png' alt=''  className="w-[50px] h-[50px] lg:w-[30px] lg:h-[30px] object-contain"/>
              <h4 className="font-extrabold text-white text-2xl">UNIBONK</h4>
            </div>
          </Link>
        </div>
        <ul className="text-white lg:gap-1 hidden md:hidden lg:flex  justify-center items-center">
          <li className="">
            <Button  className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">UBONK Coin</Button>
          </li>
          <li className="">
          <Link href="/ubonk" target='_blank'>
          
            <Button  className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">Presale</Button>
            </Link>
          </li>
          <li className="">
          <Popover placement="bottom">
            <PopoverTrigger>
            <Button  className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">Wallet</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Coming Soon</div>
              </div>
          </PopoverContent>
        </Popover>
          </li>
            <li className="">
              <Button className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">BOTs</Button>
            </li>
            <li className="">
              <Button className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">Docs</Button>
            </li>
          </ul>
        <div className="flex justify-start items-center gap-4">
          <div className="hidden md:flex gap-1 items-center text-white text-lg">
            <Link href='https://discord.com/unibonk' target='_blank'>
              <Button variant="light" className="text-white/50 hover:text-white" isIconOnly startContent={<BsDiscord size={20} />}/>
            </Link>
            <Link href='https://twitter.com/unibonk' target='_blank'>
              <Button variant="light" isIconOnly className="text-white/50 hover:text-white" startContent={<BsTwitterX  size={18} />}/>
            </Link>
            <Link href='https://t.me/unibonk' target='_blank'>
              <Button variant="light" isIconOnly className="text-white/50 hover:text-white" startContent={<BiLogoTelegram size={20} />}/>
            </Link>
          </div>  
           <div className="z-10">
           <WalletMultiButton style={{background:'#d17f2c', borderRadius:'10px'}}/>
           </div>
        </div>
      </div>
    </section>
  );
}
