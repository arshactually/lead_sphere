import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function WorkCard2({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[900px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://i.postimg.cc/J4VRHD7Q/smma.png' // Replace with your image source URL
        alt='alternative-text' // Replace with your alternative text
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Social Media Marketing</h4>
        <p className='font-bold text-2xl mt-1'>Increase your online presence</p>
        <div className='flex space-x-2 my-2'>
          {/* Content goes here */}
        </div>
        <p className='uppercase py-5 text-gray-500'></p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Boost Online Presence: Our Social Media Marketing (SMM) strategies enhance your brand&apos;s visibility and engagement across popular social media platforms.</li>
          <li>Targeted Campaigns: We tailor SMM campaigns to reach your ideal audience, driving traffic, leads, and conversions effectively.</li>
          <li>Data-Driven Results: Our SMM approach is backed by data analytics, ensuring that every campaign is optimized for maximum impact and ROI.</li>
        </ul>
      </div>
    </article>
  );
}