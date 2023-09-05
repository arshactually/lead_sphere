"use client"
import React from 'react';
import { motion } from "framer-motion"
import WorkCard from './WorkCard';

type Props = {}

export default function Work({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    const arrayLength: number = projects.length;

  return (
    <motion.div 
    className=' h-screen flex relative overflow-hidden flex-col text-left md:flow-row 
    max-w-full px1- justify-evenly -mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[30px] text-gray-500 text-2xl'
        >Services We Provide</h3>


        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
        snap-mandatory  scrollbar-track-gray-400
         scrollbar-thumb-[#F7AB0A]/80'>
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />




            </div>

            <div className='w-full absolute top-[30%] bg-[#005a60]/10 left-0 h-[500px]
            -skew-y-12'></div>
            </motion.div>
  )
}