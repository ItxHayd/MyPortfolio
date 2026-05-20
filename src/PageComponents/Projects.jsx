import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from "./ProjectCard"

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

            <h2 className=" text-[#00d4ff] mb-10 text-4xl">
                Projects:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            

                <ProjectCard
                    image="/projectsMedia/portfolio.png"
                    title="3D Developer Portfolio"
                    description="Modern animated portfolio built with React Three Fiber and smooth motion effects."
                    tech={["React", "Tailwind", "Framer Motion", "Three.js"]}
                    github="https://github.com/ItxHayd/MyPortfolio"
                    demo="https://yourdemo.com"
                />
                <ProjectCard
                    image="/projectsMedia/img_gen.jpg"
                    title="AI Image Gen Site"
                    description="Modern image genration site built with MERN and CloudFlare AI Worker with Authentication"
                    tech={["React", "Tailwind", "Typescript", "MongoDB","Redis","Express"]}
                    github="https://github.com/ItxHayd/Free_IMG_GEN"
                    demo="https://yourdemo.com"
                />
                <ProjectCard
                    image="/projectsMedia/portfolio.png"
                    title="3D Developer Portfolio"
                    description="Modern animated portfolio built with React Three Fiber and smooth motion effects."
                    tech={["React", "Tailwind", "Framer Motion", "Three.js"]}
                    github="https://github.com/ItxHayd/MyPortfolio"
                    demo="https://yourdemo.com"
                />
                <ProjectCard
                    image="/projectsMedia/portfolio.png"
                    title="3D Developer Portfolio"
                    description="Modern animated portfolio built with React Three Fiber and smooth motion effects."
                    tech={["React", "Tailwind", "Framer Motion", "Three.js"]}
                    github="https://github.com/ItxHayd/MyPortfolio"
                    demo="https://yourdemo.com"
                />
              
            
               
               
                
            </div>
        </div>
    </motion.section>
  )
}

export default Projects