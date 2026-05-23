import React from 'react'
import { motion } from 'framer-motion'
import { tr } from 'framer-motion/client'
import ScrollIndicator from '../components/ui/ScrollIndicator'
import { useTheme } from "../Theme"

const Hero = () => {
  const { isDark } = useTheme();

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
                    className={`bg-cover border-4 border-[#00d4ff] rounded-full inline-block self-center h-[30vh] w-[30vh] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.75)]
                      ${isDark ? "bg-black/60" : "bg-[#ddd]"}
                    `}
                    style={{ backgroundImage: "url(/icons/self.png)" }}
                ></div>

                <h2 className={`text-5xl mb-2.5 ${isDark ? "text-white" : "text-[#111]"}`}>
                    Hello, I'm <span className={"text-[#00d4ff]"}>Hayd</span>
                </h2>

                <p className={`text-[20px] ${isDark ? "text-[#666]" : "text-[#444]"}`}>
                    A <span className={"text-[#00d4ff]"}>MERN</span> Stack Developer
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
                 <p className={`mt-6 text-lg text-justify leading-relaxed
                    ${isDark ? "text-gray-300" : "text-gray-700"}
                 `}>
                    I’m a <span className={"font-semibold text-[#00d4ff]"}> MERN Stack Developer </span> 
                    focused on building modern, fast, and interactive web applications.
                    I specialize in creating <span className={"font-semibold text-[#00d4ff]"}>full-stack</span> apps using MongoDB, Express,
                    React, and Node.js with smooth UI/ experiences.
                </p>

                <p className={`mt-4 block
                    ${isDark ? "text-gray-400" : "text-gray-600"}
                `}>
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