"use client"
import React from 'react';
import { motion } from "framer-motion"
import WorkCard1 from './WorkCard1';
import WorkCard2 from './WorkCard2';
import WorkCard3 from './WorkCard3';

type Props = {}

export default function Work({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    const arrayLength: number = projects.length;

  return (
    <motion.div 
    className=' h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flow-row 
    max-w-full px1- justify-evenly -mx-auto items-center overflow-x-hidden  '>
        <h3 className='absolute top-24 uppercase tracking-[30px] text-gray-500 text-2xl max-[480px]:tracking-[3px]'
        >Services We Provide</h3>


        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
        snap-mandatory overflow-y-hidden scrollbar scrollbar-track-gray-400
         scrollbar-thumb-[#005a60]/80'>

            <WorkCard1 />
            <WorkCard2 />
            <WorkCard3 />
            




            </div>

            <div className='w-full absolute top-[30%] bg-[#005a60]/10 left-0 h-[500px]
            -skew-y-12'></div>
            </motion.div>
  )
}