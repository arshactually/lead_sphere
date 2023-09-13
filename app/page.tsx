import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    
    <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandotory 
    overflow-scroll overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#005a60]'>
    
      <title>LeadSphere Automation</title>
    
    {/* Header */}

    <Header />

    {/* Hero */}
    <section id="hero" className='snap-start'>
      <Hero />
    </section>

    {/* About */}
    <section id="about" className='snap-center'>
      <About />

    </section>

    

    {/* Work */}
    <section id="work" className='snap-center '>
      <Work />
    </section>
    {/* Contact us */}
    <section id='contact' className='snap-start'>
      <Contact />

    </section>

    {/* footer */}
    <section id='footer' className='snap-end'>
      <Footer />
    </section>

    <div>
        <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
        <Script src="https://mediafiles.botpress.cloud/3b2d1eb1-8349-43ba-ab8e-7b4facaab0b1/webchat/config.js" defer></Script>

    </div>




  


    </main>
 
  );
}

// import {defineField, defineType} from 'sanity'

// export default defineType({
  // name: 'pageInfor',
  // title: 'PageInfo',
  // type: 'document',
  // fields: [
//     {
//       name:"name",
//       title:"Name",
//       type:"string",
//     },
//     {
//       name:"role",
//       title:"Role",
//       type:"string",
//     },
//     {
      // name:"heroImage",
      // title:"Image",
      // type:"image",
      // options: {
      //   hotspot: true,
//       }
//     },
//     {
      // name:"backgroundInformation",
      // title:"BackgroundInformation",
      // type:"string",
//     },
//     {
      // name:"profilePic",
      // title:"ProfilePic",
      // type:"image",
      // options: {
      //   hotspot: true,
      // }
//     },
//     {
//       name:"phoneNumber",
//       title:"PhoneNumber",
//       type:"string",
//     },
//     {
//       name:"email",
//       title:"Email",
//       type:"string",
//     },
//     {
      // name:"address",
      // title:"Address",
      // type:"string",
//     },
//     {
      // name:"socials",
      // title:"Socials",
      // type:"array",
      // of: [{  type : "reference", to: {type: "socials"}}],
//     },

//   ]
// })