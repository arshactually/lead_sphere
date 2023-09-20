import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function WorkCard1({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[900px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://i.postimg.cc/dtrt5RNX/aibot.png' // Replace with your image source URL
        alt='alternative-text' // Replace with your alternative text
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Chatbot Integration</h4>
        <p className='font-bold text-2xl mt-1'>AI- Automation</p>
        <div className='flex space-x-2 my-2'>
          {/* Content goes here */}
        </div>
        <p className='uppercase py-5 text-gray-500'></p>

        <ul className='list-disc space-y-4 ml-5 text-lg max-[480px]:w-[100vw] max-[480px]:px-[10vw] max-[375px]:text-sm'>
          <li>Enhanced Customer Interaction: AI chatbots provide efficient and personalized customer support, improving user experiences and satisfaction.</li>
          <li>24/7 Availability: Chatbots are available round the clock, ensuring immediate responses to customer inquiries, even outside business hours</li>
          <li>Data-Driven Insights: AI bots collect and analyze customer interactions, offering valuable insights to refine your strategies and optimize user interactions.</li>
        </ul>
      </div>
    </article>
  );
}