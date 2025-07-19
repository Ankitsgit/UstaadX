import React from 'react'
import Navbar from '../components/Landing/Navbar';
import Hero from '../components/Landing/Hero';
import Explore from '../components/Landing/Explore';
import HowItWorks from '../components/Landing/HowItWorks';
import Features from '../components/Landing/Features';
// import UIPreview from '../components/Landing/UIPreview';
import Testimonials from '../components/Landing/Testimonials';
import CTABanner from '../components/Landing/CTABanner';
import Footer from '../components/Landing/Footer';
// import { Outlet } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Explore /> */}
      <HowItWorks />
      {/* <Features /> */}
      {/* <UIPreview /> */}
      {/* <Testimonials /> */}
      {/* <CTABanner /> */}
      <Footer />
    </div>
  );
};

export default Landing;
