import About from '@/components/About';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Image from 'next/image'

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

    {/* Contact us */}

    {/* Work */}
    <section id="work" className='snap-center'>
      <Work />
    </section>

  


    </main>
 
  );
}
