import React, { useState } from 'react'
import Nav from './PageComponents/Nav.jsx'
import Footer from './PageComponents/FooterBar.jsx'
import ContactMe from './PageComponents/ContactMe.jsx'
import Projects from './PageComponents/Projects.jsx'
import Hero from './PageComponents/Hero.jsx'
import { useTheme } from "./Theme"
import SkillsSection from './PageComponents/SkillsSection.jsx'

const Page = () => {
    const {isDark, setDark } = useTheme();
    return (
        <div data-theme={(!isDark)?"silk":"dark"} className={`${(!isDark)?"backdrop-invert-100":""} m-0 p-0 box-border font-inter  text-white leading-[1.6]`}>

            <Nav/>
            <Hero/>
            <SkillsSection/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default Page