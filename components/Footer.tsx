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

    <div>
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/5a418cc2-b33f-43ca-a21e-11478d8644ee/webchat/config.js" defer></script>
    </div>


    <div className=' font-semibold px-10'>
        <h3>Built with love by Arshactually™</h3>
    </div>


  </footer>
  )
}

export default Footer