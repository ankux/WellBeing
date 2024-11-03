import React from 'react'
import HeroSection from './HomeComponents/HeroSection'
import ServicesSection from './HomeComponents/ServicesSection'
import DoctorsCard from './HomeComponents/DoctorsCard'
import Stats from './HomeComponents/Stats'
import Testimonials from './HomeComponents/Testimonials'
import Faq from './HomeComponents/Faq'

function Home() {
  
  return (
    <>
        <HeroSection />
        <ServicesSection/>
        <Stats/>
        <DoctorsCard/>
        <Testimonials/>
        <Faq/>
    </>
  )
}

export default Home