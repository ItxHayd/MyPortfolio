import React from 'react'

const Nav = () => {
  return (
       <header className="py-5">
          <div className="w-[90%] max-w-300 mx-auto flex justify-between items-center">
            
            <a href="index.html" className="no-underline text-[#ff0077] hover:text-[#ff0055]">
              <h1 className="text-2xl font-bold">
                Hayd
              </h1>
            </a>

            <nav>
              <a
                href="#about"
                className="ml-5 no-underline  font-medium hover:text-[#ff6b6b]"
              >
                About
              </a>

              <a
                href="#projects"
                className="ml-5 no-underline  font-medium hover:text-[#ff6b6b]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="ml-5 no-underline  font-medium hover:text-[#ff6b6b]"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
  )
}

export default Nav