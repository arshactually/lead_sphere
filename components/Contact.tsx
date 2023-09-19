"use client"
// import { PhoneIcon } from '@heroicons/react/20/solid'
// import { EnvelopeIcon } from '@heroicons/react/24/outline'
// import { MapPinIcon } from '@heroicons/react/24/solid'
// import React from 'react'
// import { useForm , SubmitHandler } from 'react-hook-form'

// type Inputs = {
//     name: string
//     email: string
//     subject: string
//     message: string
//   }
// type Props = {};

// function Contact({}: Props) {
//     const {
//         register,
//         handleSubmit,
  
//       } = useForm<Inputs>()
//       const onSubmit: SubmitHandler<Inputs> = (formData) => {
//         window.location.href = `mailto:leadsphere.business@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) ;`
//       }
//   return (
//     <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
//         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
//             Contact Us</h3>

//         <div className='flex flex-col space-y-10'>
//             <h4 className='text-4xl font-semibold text-center'>
//             We've got just what you need.{" "}
//             <span className='decoration-[#005a60]/50 underline'>Let's Talk.</span>
//         </h4>

//             <div className=' text-[#ffff] flex items-center space-x-5 justify-center '>
//                 <PhoneIcon className='text-[#005a60] h-7 w-7 animate-pulse'/>
//                 <p className='text-2xl'>+4915750125829</p>
//             </div>
//             <div className=' text-[#ffff] flex items-center space-x-5 justify-center '>
//                 <EnvelopeIcon className='text-[#005a60] h-7 w-7 animate-pulse'/>
//                 <p className='text-2xl'>leadsphere.business@gmail.com</p>
//             </div>
//             <div className=' text-[#ffff] flex items-center space-x-5 justify-center '>
//                 <MapPinIcon className='text-[#005a60] h-7 w-7 animate-pulse'/>
//                 <p className='text-2xl'>Dresden, Germany</p>
//             </div>
//             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
//                 <div className='flex space-x-2'>
//                     <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
//                     <input {...register('email')} placeholder="Email" className="contactInput" type="text" />
//                 </div>
//                 <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

//                 <textarea {...register('message')} placeholder="Message" className="contactInput" ></textarea>
//                 <button type="submit"
//                 className='bg-[#005a60] py-5 px-10 rounded-md text-blacl ont-bold text-lg '>Submit</button>
//             </form>
            
           
//         </div>
//     </div>
//   )
// }

// export default Contact

import { PhoneIcon } from '@heroicons/react/20/solid';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:leadsphere.business@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) ;`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Us
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="max-[480px]:hidden text-4xl font-semibold text-center">
          We&apos;ve got just what you need.{" "}
          <span className="max-[480px]:hidden decoration-[#005a60]/50 underline">Let&apos;s Talk.</span>
        </h4>

        <div className="text-[#ffff] flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#005a60] h-7 w-7 animate-pulse" />
          <p className="max-[480px]:text-xl text-2xl">+4915750125829</p>
        </div>
        <div className="text-[#ffff] flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#005a60] h-7 w-7 animate-pulse" />
          <p className="max-[480px]:text-xl text-2xl">leadsphere.business@gmail.com</p>
        </div>
        <div className="text-[#ffff] flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#005a60] h-7 w-7 animate-pulse" />
          <p className="max-[480px]:text-xl text-2xl">Dresden, Germany</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto max-[480px]:w-[80vw]"
        >
          <div className="flex space-x-2 max-[480px]:flex-col max-[480px]:space-x-0 max-[480px]:space-y-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#005a60] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;