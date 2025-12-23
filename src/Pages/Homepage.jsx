import React from 'react'
import Footer from '../component/Footer'
import Herosection from '../component/Herosection'
import SkillsSection from '../component/SkillsSection'
import About from '../component/About'
import Services from '../component/Services'
import Contact from '../component/Contact'
import ScrollToTop from '../component/ScrollToTop'

const Homepage = () => {
  return (
    <div>
        <Herosection />
        <About />
        <SkillsSection />
        <Services />
         <Contact />
         <Footer />
         <ScrollToTop/>
    </div>
  )
}

export default Homepage