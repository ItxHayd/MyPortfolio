
import { motion, useScroll } from "framer-motion"
import Page from "../Page.jsx"

import React from 'react'

const ScrollAnimation = () => {
    
    const { scrollYProgress } = useScroll()
    
    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#ff0088",
                }}
            />
            <Page/>
        </>
    )
}

export default ScrollAnimation

