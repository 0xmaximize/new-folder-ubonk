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
	<footer className={`${styles.footer} bg-gray-900 overflow-hidden`}>
		<Divider className="mb-4 bg-white/10 " />
			<div className="flex justify-between my-2 items-center">
            <p className=' text-gray-400 text-[10px]'>	Whitepaper</p>
				<p className=' text-gray-400 text-[10px]'>©UNIBONK 2024 </p>
			</div>
		
	</footer>
		</>
	);
}

export default Footer;