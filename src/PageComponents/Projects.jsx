import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.section
        initial={{
            opacity: 0,
            x: "-100%",
            filter: "blur(10px)"
        }}
        whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)"
        }}
        transition={{
            duration: 1.2,
            ease: "easeOut"
        }}
        id="projects"
        className="py-15"
    >
        <div className="w-[90%] max-w-300 mx-auto" >

            <h2 className="text-center mb-10 text-4xl">
                My Projects
            </h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">


                <div className="border-t border-l border-amber-500 p-5 rounded-xl shadow-[2px_4px_0px_rgba(255,0,0,1)]">
                    <h3 className="mb-2.5 text-[20px] ">
                        Portfolio Website
                    </h3>

                    <p className="text-[#666]">
                        A personal portfolio site to showcase my skills and projects.
                    </p>
                </div>
               
               
                
            </div>
        </div>
    </motion.section>
  )
}

export default Projects