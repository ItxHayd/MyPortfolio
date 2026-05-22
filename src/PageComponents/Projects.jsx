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
                    demoIsAvailable = {false}
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
                    image="/projectsMedia/Static-gen.jpg"
                    title="Static Site Generator (Node)"
                    description="A lightweight static website generator built with Node.js that converts templates and content into fast, SEO-friendly static HTML pages. Ideal for blogs, portfolios, and small websites with minimal setup and fast performance."
                    tech={["Glob", "EJS", "Node"]}
                    github="https://github.com/ItxHayd/Static-Website_Generator"
                    demoIsAvailable = {false}
                />
                <ProjectCard
                    image="/projectsMedia/bg-rem.jpg"
                    title="Image BackGround Remover"
                    description="Simple Background remover using Cloudflare and Basic JS along with remove-bg api"
                    tech={["Remove-bg", "Cloudflare Workers", "JS"]}
                    github="https://github.com/ItxHayd/Background_Remover"
                    demo="https://itxhayd.github.io/Background_Remover/"
                />
              
            
               
               
                
            </div>
        </div>
    </motion.section>
  )
}

export default Projects