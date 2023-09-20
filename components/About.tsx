"use client"
// import React from 'react'
// import { motion } from "framer-motion"

// type Props = {}

// export default function About({}: Props) {
//   return (
//     <motion.div 
//     initial={{ opacity : 0}}
//     whileInView={{ opacity:1}}
//     transition={{ duration:1.5}}
//     className='flex flex-col relative h-screen text-center md:text-left
//     md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

//         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//             About</h3>

//             <motion.img 
//             initial={{
//                 x:-200,
//                 opacity:0,
//             }}
//             whileInView={{
//                 x:0,
//                 opacity:1,
//             }}
//             viewport={{ once:true}}
//             transition= {{
//                 duration: 1.2,
//             }}
//             src='https://i.pinimg.com/564x/e1/b3/01/e1b3016a1a46ff49dc28661fc5da6970.jpg'

//             className='-md-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[200px]'
//             />

//             <div className='space-y-10 px-0 md:px-10'>
//                 <h1 className='text-4xl font-semibold'>Here is a
//                 <span className='underline decoration-[#005a60]/50'> little  </span> background
//                 </h1>
//                 <p className='text-base '>
//                 Your end-to-end partner for AI-powered transformations, from ideation to implementation and beyond. 
//                 We're not just automation experts; we're your dedicated team, assisting startups and enterprises in crafting groundbreaking AI solutions that streamline operations and fuel progress. 
//                 Guided by our founder's vision, we navigate the entire journey, transforming your concepts into practical, efficiency-boosting solutions. 
//                 With a wealth of experience spanning various sectors, we're here to construct an innovative product that propels your company towards enduring success.
//                 </p>
//             </div>
    
    
//     </motion.div>
//   )
// }
import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl max-[480px]:top-10 max-[375px]:pl-[50px]">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src="https://i.pinimg.com/564x/e1/b3/01/e1b3016a1a46ff49dc28661fc5da6970.jpg"
        className="-md-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[200px]"
        alt="Image Description"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h1 className="text-4xl font-semibold">
          Here is a
          <span className="underline decoration-[#005a60]/50"> little </span> background
        </h1>
        <p className="text-base ">
          Your end-to-end partner for AI-powered transformations, from ideation to implementation and beyond.
          We&apos;re not just automation experts; we&apos;re your dedicated team, assisting startups and enterprises in crafting groundbreaking AI solutions that streamline operations and fuel progress.
          Guided by our founder&apos;s vision, we navigate the entire journey, transforming your concepts into practical, efficiency-boosting solutions.
          With a wealth of experience spanning various sectors, we&apos;re here to construct an innovative product that propels your company towards enduring success.
        </p>
      </div>
    </motion.div>
  );
}