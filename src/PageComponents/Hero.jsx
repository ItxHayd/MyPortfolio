import React from 'react'
import { motion } from 'framer-motion'
import { tr } from 'framer-motion/client'
import ScrollIndicator from '../components/ui/ScrollIndicator'
const Hero = () => {
  return (
     <motion.section 
        
        className="text-center py-25 px-5"
     >
        <div className="lg:flex">
            <motion.div 
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
                    type: "keyframes",
                    delay: 0.1,
                    duration: 0.9,
                    ease: "easeInOut"
                }}
                viewport={{once:true}}
                
                className="flex-2 w-[90%] max-w-300 mx-auto"
            >
                <div
                    className="bg-[#555] bg-cover rounded-full inline-block self-center h-[30vh] w-[30vh] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.75)]"
                    style={{ backgroundImage: "url(img.jpg)" }}
                ></div>
                <h2 className="text-5xl mb-2.5">
                    Hello, I'm Hayd
                </h2>

                <p className="text-[20px] text-[#666]">
                    A MERN Stack Developer
                </p>

            </motion.div>

            <motion.div 
                initial={{
                    opacity: 0,
                    x: "100%",
                    filter: "blur(10px)"
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)"
                }}
                transition={{
                    type: "keyframes",
                    delay: 0.1,
                    duration: 0.9,
                    ease: "easeInOut"
                }}
                viewport={{once:true}}
                className="flex-3 mt-20 w-[90%] max-w-300 mx-auto"
            >
                 <p className="mt-6 text-lg text-gray-300 text-justify leading-relaxed">
                    I’m a <span className=" font-semibold"> MERN Stack Developer </span> 
                    focused on building modern, fast, and interactive web applications.
                    I specialize in creating full-stack apps using MongoDB, Express,
                    React, and Node.js with smooth UI/UX experiences.
                    </p>

                    <p className="mt-4 block text-gray-400">
                        I love working with modern UI libraries, and building
                        scalable backend systems.
                    </p>

            </motion.div>
            
        </div>
        <ScrollIndicator/>
    </motion.section>
  )
}

export default Hero