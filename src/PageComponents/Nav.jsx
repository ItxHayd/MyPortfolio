import React from 'react'
import ToggleIcon from '../components/ui/ToggleIcon'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
       <motion.nav 
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          className="py-5 sticky top-0 z-10 backdrop-blur-xl"
        >
          <div className="w-[90%] max-w-300 mx-auto flex justify-between items-center">
            
            <a href="index.html" className="no-underline text-[#ff0077] hover:text-[#ff0055]">
              <h1 className="text-2xl font-bold">
                Hayd
              </h1>
            </a>

            <div className="flex gap-2 md:gap-4">
              <a
                href="#about"
                className="no-underline  font-medium hover:text-[#ff6b6b]"
              >
                About
              </a>

              <a
                href="#projects"
                className="no-underline  font-medium hover:text-[#ff6b6b]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="no-underline  font-medium hover:text-[#ff6b6b]"
              >
                Contact
              </a>
              <ToggleIcon  className="translate-x-4 hover:scale-110 transition-transform"/>
            </div>
          </div>
      </motion.nav>
  )
}

export default Nav