import React from 'react'
import GetStartedButton from './GetStartedButton'
function HeroSection() {
  return (
    <section className="p-4 rounded-lg text-center text-white bg-cover bg-center min-h-[480px] flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuANQ...')` }}>
      <h1 className="text-4xl font-black tracking-tight">Unlock Your Potential with SkillSwap</h1>
      <p className="text-base">
        Connect with a vibrant community of learners and experts to exchange skills and knowledge.
      </p>
      <GetStartedButton />
    </section>

  )
}

export default HeroSection
