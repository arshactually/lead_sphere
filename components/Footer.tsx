import React from 'react'
import { SocialIcon } from "react-social-icons";

type Props = {}

function Footer({}: Props) {
  return ( 
  <footer className='bottom-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center'>
    <div
    >
        <SocialIcon
            url='https://www.linkedin.com/company/leadsphere-automation/'
            fgColor='gray'
            bgColor='transparent'
        />
        <SocialIcon
            url='https://www.instagram.com/arshactually/'
            fgColor='gray'
            bgColor='transparent'
        />
        <SocialIcon
            url='https://github.com/arshactually'
            fgColor='gray'
            bgColor='transparent'
        />
        
        <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
        />

    </div>

    


    <div className=' font-semibold px-10'>
        <h3>Built with love by Arshactually™</h3>
    </div>


  </footer>
  )
}

export default Footer