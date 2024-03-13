'use client';
import React, { useState } from "react";
import {
  Button, Popover, PopoverTrigger, PopoverContent, Image
} from "@nextui-org/react";
import { ChevronDown } from "./Icon.jsx";
import Link from "next/link";
import { useRouter } from 'next/router';
import { BsDiscord, BsTwitterX , } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { TbMenuOrder } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import { FaArrowRight  } from 'react-icons/fa';


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
      <div className="flex justify-between mx-2 md:mx-6 lg:mx-20 lg:px-20  py-4">
        <div className="flex items-center justify-between md:gap-4 lg:gap-20">
         
          <Link href='/'>
          <div className=" flex  justify-center items-center ">
              <Image src='https://svgur.com/i/14Hw.svg' alt=''  className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full object-contain"/>
              <h4 className="font-extrabold text-white text-xl lg:text-2xl">UNIBONK</h4>
            </div>
          </Link>
        </div>
        <ul className="text-white lg:gap-1 hidden md:hidden lg:flex  justify-center items-center">
          <Link href='https://birdeye.so/token/8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5?chain=solana'>
            <Button  className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">UBONK</Button>
          </Link>
          <li className="">
          <Link href="/ubonk" target='_blank'>
            <Button  className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">Presale</Button>
            </Link>
          </li>
          <li className="">
            <Button  className="text-white/50 hover:text-white bg-transparent hover:bg-orange-400/70 text-[18px]">Wallet</Button>
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
           <div className="flex  items-center gap-1 z-10">
           <Link href='/ubonk'>
           <Button size="lg"  radius="md"  className="bg-orange-500 hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold"> BUY UBONK</Button>
          </Link>
           <CiMenuKebab className='flex text-orange-400 lg:hidden ' size={20} />
           </div>
        </div>
      </div>
    </section>
  );
}
