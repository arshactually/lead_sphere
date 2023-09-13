"use client"
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';


type Props = {}
export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "LeadSphere Automation",
            "Here-to-Automate-your-Business.tsx",
            "<Bringing-in-Leads-Like-Waves~/>",
        ],
        loop:true,
        delaySpeed:2000,
    });
    return (
        <div className='h-screen flex flex-row items-center justify-between text-center overflow-hidden'>
            <BackgroundCircles />
            <div className='mr-auto'>
            <img
                className=' relative hidden md:inline-flex rounded-full h-60 w-50 mx-auto object-cover'
                src='https://i.postimg.cc/Y2vdvFwy/icon.png'
                />

            </div>

            
            <div className='ml-auto' >
            <h1 className='text-5xl  lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#005a60"/>
            </h1>
                
            </div>
           

        </div>
    
        
      )

};






