import React from 'react'
import TechMarquee from '../components/ui/TechMarquee'

const SkillsSection = () => {
  return (
    <div className="w-[90%] mt-12 mb-2 max-w-300 mx-auto">
       <h2 className="mb-4 text-2xl md:text-5xl text-[#00d4ff]">Skills:</h2>

       <TechMarquee/>
    </div>
  )
}

export default SkillsSection