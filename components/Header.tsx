"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import  Link  from "next/link";

function Header() {
    return <header className=" md:sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center max-[480px]:flex-col">
        
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
        <Link href="#hero" className="menuList">    <Image
        src="https://i.postimg.cc/Y2vdvFwy/icon.png"
        alt="Logo"
        width={300}
        height={100}
        className="w-20 md:w-76"   
    
    /></Link>

    </motion.div>

    

    <div className='max-[480px]:hidden pt-5'>
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

// "use client"

// import React , {useState} from "react"
// import { motion } from "framer-motion"
// import Image from "next/image";
// import { SocialIcon } from "react-social-icons";
// import  Link  from "next/link";
// import { BsList, BsX } from "react-icons/bs";

// function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const toggleMenu = () => setMenuOpen(!menuOpen);

//     return <header className=" sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center">
        
//     <motion.div 
//             initial={{
//                 x: -500,
//                 opacity: 0,
//                 scale: 0.5,
    
//             }}
//             animate={{
//                 x:0,
//                 opacity: 1,
//                 scale:1,
//             }}
//             transition={{ duration: 1.5}}
    
    
    
//     className=" flex items-start justify-between text-[#FFFF]">
//         <Link href="#hero" className="menuList">    <Image
//         src="https://i.postimg.cc/Y2vdvFwy/icon.png"
//         alt="Logo"
//         width={300}
//         height={100}
//         className="w-20 md:w-76"   
    
//     /></Link>

//     </motion.div>

    

//     <div className='hidden md:inline-flex pt-5'>
//         <Link href="#about">
//         <button className='heroButton'>About</button>
//         </Link>
//         <Link href="#work" >
//         <button className='heroButton'>Work</button>
//         </Link>
//         <Link href="#career">
//         <button className='heroButton'>Career</button>
//         </Link>

//     </div>


//             {/* Mobile menu */}
//     <div onClick={toggleMenu} className='sm:hidden cursor-pointer pl-40 pt-5'>
//         <BsList className="h-8 w-8 text-[#005a60]"/>
//     </div>

//     <div 
//     className={
//         menuOpen 
//         ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
//         : "fixed left-[-100] top-0 p-10 ease-in-out duration-500"
//         }
//     >
//         <div className="flex w-full items-center justify-end ">
//             <div onClick={toggleMenu} className="hidden cursor-pointer">
//                 <BsX className=" h-8 w-8 text-[#000]" />
//             </div>
//         </div>

//         {/* Mobile Menu Links */}
//         <div className="hidden flex-col py-4">
//             <ul>
//                 <li onClick={() => setMenuOpen(false) } 
//                 className="py-3 hover:underline hover:decoration-[#24242]">
//                 <Link href="#about">
//                         <button className='heroButton'>About</button>
//                     </Link>
//                 </li>
//                 <li onClick={() => setMenuOpen(false) } 
//                 className="py-3 hover:underline hover:decoration-[#24242]">
//                     <Link href="#work" >
//                         <button className='heroButton'>Work</button>
//                     </Link>
//                 </li>
//                 <li onClick={() => setMenuOpen(false) } 
//                 className="py-3 hover:underline hover:decoration-[#24242]">
//                 <Link href="#career">
//                         <button className='heroButton'>Career</button>
//                 </Link>
//                 </li>
//                 <li onClick={() => setMenuOpen(false) } 
//                 className="flex items-center py-4 text-[#0000]">
//                     <Link href="#contact">
//                          <button className="contactButton uppercase hidden md:inline-flex text-sm text-black-400">
//                             Contact us
//                         </button>
                        
//                     </Link>
                
//                 </li>
                
                
//             </ul>
//         </div>

//     </div>


//     <motion.div
//         initial={{
//             x: 500,
//             opacity: 0,
//             scale: 0.5,

//         }}
//         animate={{
//             x:0,
//             opacity: 1,
//             scale:1,
//         }}
//         transition={{ duration: 1.5}}

//         className="flex flex-row items-center text-gray-300 cursor-pointer"

//     >
//         <Link href="#contact">
//             <button className="contactButton uppercase hidden md:inline-flex text-sm text-black-400">
//                 Contact us
//             </button>
        
//         </Link>
        


//     </motion.div>
    

        
    
//   </header>;
  
// }

// export default Header