import React from 'react'
import { SocialIcon } from "react-social-icons";

type Props = {}

function Footer({}: Props) {
  return ( 
  <footer className='bottom-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center max-[480px]:flex-col '>
    <div className='max-[480px]:mx-auto'
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

    


    <div className=' max-[480px]:flex-col font-semibold px-10 max-[480px]:mx-auto'>
        <h3>Built with love by Arshactually™</h3>
    </div>


  </footer>
  )
}

export default Footer