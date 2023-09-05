import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function WorkCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    
w-[500px] h-[900px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '>

        <motion.div 
        initial={{ y:-100,
            opacity : 0}}
        
        whileInView={{ y:0 , opacity:1}}
        transition={{ duration:1.2}}
        viewport={{ once:true}}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of ACTVision</h4>
            <p className='font-bold text-2xl mt-1'>ACTVision</p>
            <div className='flex space-x-2 my-2'>
                

                

            </div>
            <p className='uppercase py-5 text-gray-500'>Started work.. - Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>

            </ul>
        </div>

    </article>
  )
}