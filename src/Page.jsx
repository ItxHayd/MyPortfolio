import React from 'react'
import Nav from './Nav'
import Footer from './FooterBar.jsx'
import ContactMe from './ContactMe.jsx'
import Projects from './Projects.jsx'
import Hero from './Hero.jsx'

const Page = () => {
    return (
        <div className="m-0 p-0 box-border font-['Segoe_UI',sans-serif]  text-white leading-[1.6]">

            <Nav/>
            <Hero/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    )
}

export default Page