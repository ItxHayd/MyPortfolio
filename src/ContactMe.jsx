import React from 'react'
import XIcon from './components/ui/XIcon'
import GithubIcon from './components/ui/GithubIcon'
import GoogleIcon from './components/ui/GoogleIcon'

const ContactMe = () => {
    const GMAIL_ADDRESS = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCHTrNfgqqSKLNWTDJmQPtRvZmPBgBHvWTxjLqzkqxmcgrzWmlHFlBXcRwtrbVXbCtXQhg"
  return (
        <section
                id="contact"
                className="py-15"
        >
            <div className="w-[90%] max-w-300 mx-auto">

                <h2 className="text-center mb-5 text-4xl text-[#ff0088]">
                    Contact Me At: 
                </h2>
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
        </section>
  )
}

export default ContactMe