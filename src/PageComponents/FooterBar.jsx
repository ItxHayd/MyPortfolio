import React from 'react'
import EyeIcon from '../components/ui/EyeIcon'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{
            duration: 0.42,
            ease: "easeOut"
        }}
        className="py-5  text-[#ff0088] font-semibold text-[12px]">
        <div className="w-[90%] mb-2 text-center max-w-300 text-[10px] md:text-lg mx-auto">
            "Nothing Is Perfect - But You Can Make It Better."
        </div>

        
        <div className="flex">
            <div className="ml-3 md:ml-10 w-[90%] text-[10px] md:text-sm text-left max-w-300 mx-auto">
                2025. All rights reserved
            </div>
            <div className="flex justify-end mr-3 gap-1 md:mr-10 w-[90%] text-[10px] md:text-sm text-right max-w-300 mx-auto">
                <EyeIcon color="white" className="size-5 md:size-6 hover:scale-110 transition-transform -translate-y-0.5"/>
                11623
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer