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
        <Script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></Script>
        <Script src="https://mediafiles.botpress.cloud/5a418cc2-b33f-43ca-a21e-11478d8644ee/webchat/config.js" defer></Script>
    </div>



  


    </main>
 
  );
}
