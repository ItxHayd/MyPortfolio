import React from 'react'

const Hero = () => {
  return (
     <section className="text-center py-25 px-5 ">
        <div
            className="bg-[#555] bg-cover rounded-full inline-block self-center h-[30vh] w-[30vh] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.75)]"
            style={{ backgroundImage: "url(img.jpg)" }}
        ></div>

        <div className="w-[90%] max-w-300 mx-auto">
            <h2 className="text-5xl mb-2.5">
                Hello, I'm Hayd
            </h2>

            <p className="text-[20px] text-[#666]">
                Front-end Developer & Designer
            </p>

            <a
                href="#projects"
                className="inline-block mt-5 py-3 px-6 bg-[#ff6b6b] text-white rounded-lg no-underline font-bold hover:bg-[#e85a5a]"
            >
                View My Work
            </a>
        </div>
    </section>
  )
}

export default Hero