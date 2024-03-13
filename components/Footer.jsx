'use client'
import React from "react";
import styles from "../styles";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { BiLogoDiscord } from "react-icons/bi"
import { SiGitbook } from 'react-icons/si';
import { Divider } from "@nextui-org/react";
import { exploreLinks, usageLinks, learnLinks, communityLinks } from "../constants";

function Footer() {
	return (
	<>
	<footer className={`${styles.footer} bg-gray-900 overflow-hidden `}>
		<Divider className="mb-4 bg-white/10 lg:mt-20  " />
		<div className="grid md:grid-cols-2 lg:mx-20  justify-between items-start mb-4 py-2 gap-10 md:px-10">
		<div className='grid'>
			<p className='font-bold text-white text-[20px]'>
			UNIBONK COIN
			</p>
			<div className="flex justify-start my-2 items-center">
				<p className=' text-gray-400 text-[10px]'> All Rights Reserved ©UNIBONK 2024</p>
			</div>
		</div>
		<div className="grid md:flex gap-4 md:gap-20">
			<ul>
				<span aria-label="Trade" className='font-bold text-white text-xl mb-2'>DeFi</span>
				{learnLinks.map((data) => (
					<li key='Trade' className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
				))}
			</ul>
			<ul>
				<span aria-label="Trade" className='font-bold text-white text-xl  mb-2'>Help</span>
				{exploreLinks.map((data) => (
					<li key='Trade' className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
				))}
			</ul>
			<ul className="lg:block hidden">
				<span aria-label="Trade" className='font-bold text-white text-xl mb-2'>Legal</span>
				{usageLinks.map((data) => (
					<li key='Trade' className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
				))}   
			</ul>
			<ul>
				<span aria-label="Trade" className='font-bold text-white text-xl  mb-2'>Follow us</span>
				{communityLinks.map((data) => (
					<li key='Trade' className='my-2 text-gray-500 hover:text-white'>{data.title}</li>
				))}
			</ul>
		</div>
		</div>
	</footer>
		</>
	);
}

export default Footer;