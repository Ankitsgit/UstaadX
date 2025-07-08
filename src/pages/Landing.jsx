import React from 'react'
import Header from '../components/Landing/Header';
import HeroSection from '../components/Landing/HeroSection';
import FeaturedSkills from '../components/Landing/FeaturedSkills';
import Footer from '../components/Landing/Footer';

function landing() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden font-[Manrope]">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <FeaturedSkills />
          </div>
        </main>
        <Footer />
      </div>
    </div>

  )
}

export default landing
