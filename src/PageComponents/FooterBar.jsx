import React from 'react'
import EyeIcon from '../components/ui/EyeIcon'
import { motion } from 'framer-motion'
import { useTheme } from "../Theme"
import ViewCounter from './ViewCounter'

const Footer = () => {

  const { isDark } = useTheme();

  return (
    <motion.footer 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{
            duration: 0.22,
            ease: "easeOut"
        }}
        className={`
          py-5 font-semibold text-[12px]
          ${isDark ? "text-white/70" : "text-black/70"}
        `}
    >
        <div className={`w-[90%] mb-2 text-center max-w-300 text-[10px] md:text-lg mx-auto
          ${isDark ? "text-white/80" : "text-black/80"}`}>
            "Nothing Is Perfect - But You Can Make It Better."
        </div>

        
        <div className="flex">
            <div className={`
              ml-3 md:ml-10 w-[90%] text-[10px] md:text-sm text-left max-w-300 mx-auto
              ${isDark ? "text-white/50" : "text-black/50"}
            `}>
                2025. All rights reserved
            </div>

            <ViewCounter/>
        </div>
    </motion.footer>
  )
}

export default Footer