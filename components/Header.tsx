"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import  Link  from "next/link";

function Header() {
    return <header className=" sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center">
        
    <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
    
            }}
            animate={{
                x:0,
                opacity: 1,
                scale:1,
            }}
            transition={{ duration: 1.5}}
    
    
    
    className=" flex items-start justify-between text-[#FFFF]">
        <Link href="/" className="menuList">    <Image
        src="https://i.postimg.cc/Y2vdvFwy/icon.png"
        alt="Logo"
        width={300}
        height={100}
        className="w-20 md:w-76"   
    
    /></Link>

    </motion.div>

    

    <div className='pt-5'>
        <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>
        <Link href="#work" >
        <button className='heroButton'>Work</button>
        </Link>
        <Link href="#career">
        <button className='heroButton'>Career</button>
        </Link>

    </div>

    <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,

        }}
        animate={{
            x:0,
            opacity: 1,
            scale:1,
        }}
        transition={{ duration: 1.5}}

        className="flex flex-row items-center text-gray-300 cursor-pointer"

    >

        <button className="contactButton uppercase hidden md:inline-flex text-sm text-black-400">
         Contact us
        </button>


    </motion.div>
    

        
    
  </header>;
  
}

export default Header