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


export default function BuyNavbar() {
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
    <section className='w-full bg-gray-900 z-10'>
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
       
        <div className="flex justify-start items-center gap-4">
           <div className="z-10">
           <WalletMultiButton style={{background:'#d17f2c', borderRadius:'10px'}}/>
           </div>
        </div>
      </div>
    </section>
  );
}
