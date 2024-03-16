'use client'
import React from "react";
import styles from "../styles";
import { Divider, Link } from "@nextui-org/react";

function Footer() {
	return (
	<>
	<footer className={`${styles.footer} bg-gray-900 overflow-hidden`}>
		<Divider className="mb-4 bg-white/10 " />
		
			<div className="flex justify-between my-2 items-center">
			<p className=' text-gray-400 text-[10px]'>©UNIBONK 2024 </p>

				<Link href='https://docs.unibonk.meme' target='_blank'>
            <p className=' text-gray-400 text-[10px]'>	Whitepaper</p>
			</Link>
			</div>
		
	</footer>
		</>
	);
}

export default Footer;