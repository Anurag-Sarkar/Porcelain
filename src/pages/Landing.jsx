import React from 'react'
import NavBar from '../components/common/NavBar'
import LandingSection from '../components/sections/Landing/LandingSection'
import AboutSections from '../components/sections/Landing/AboutSections'
import DoctorSection from '../components/sections/Landing/DoctorSection'
import TreamentSection from '../components/sections/Landing/TreamentSection'
import Testimonials from '../components/sections/Landing/Testimonials'
import CTA from '../components/sections/Landing/CTA'
import Footer from '../components/common/Footer'

const Landing = () => {
  return (
    <>
      <NavBar />
      <LandingSection />
      <AboutSections />
      <DoctorSection />
      <TreamentSection />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default Landing