import React from 'react'
import { motion } from 'framer-motion'

import XIcon from '../components/ui/XIcon'
import GithubIcon from '../components/ui/GithubIcon'
import GoogleIcon from '../components/ui/GoogleIcon'
import ReachOutIcon from '../components/ui/ReachoutIcon'



const ContactMe = () => {
    const GMAIL_ADDRESS = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCHTrNfgqqSKLNWTDJmQPtRvZmPBgBHvWTxjLqzkqxmcgrzWmlHFlBXcRwtrbVXbCtXQhg"
  return (
        <motion.section
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                id="contact"
                className="py-15"
        >
            <div className="w-[90%] max-w-300 mx-auto">
                <div className="flex justify-center content-center">
                    <ReachOutIcon size={36} color="#ff0088" className="hover:scale-110 transition-transform translate-y-1.5 -translate-x-0.5 "/>
                    <h2 className="cursor-pointer ml-1 text-center mb-5 font-bold text-2xl md:text-4xl text-[#ff0088]">
                        Reach Out
                    </h2>
                </div>
                <div className= "flex content-center justify-center gap-3">
                    <a href={GMAIL_ADDRESS} target="_blank" rel="noopener noreferrer">
                        <GoogleIcon size={32} color="white" className="hover:scale-110 transition-transform"/>
                    </a>
                    <a href="https://github.com/ItxHayd" target="_blank" rel="noopener noreferrer">
                        <GithubIcon size={32} color="white" className="hover:scale-110 transition-transform"/>
                    </a>
                    <a href="https://x.com/hayd_shafqat" target="_blank" rel="noopener noreferrer">
                        <XIcon size={32} color="white" className="hover:scale-110 transition-transform"/>
                    </a>
                </div>
            </div>
        </motion.section>
  )
}

export default ContactMe