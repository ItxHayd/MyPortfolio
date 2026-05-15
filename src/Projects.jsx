import React from 'react'

const Projects = () => {
  return (
    <section
        id="projects"
        className="py-15 "
    >
        <div className="w-[90%] max-w-300 mx-auto" >

            <h2 className="text-center mb-10 text-4xl">
                My Projects
            </h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">


                <div className="border-t border-l border-amber-500 p-5 rounded-xl shadow-[2px_4px_0px_rgba(255,0,0,1)]" onClick={console.log("clicked me!")}>
                    <h3 className="mb-2.5 text-[20px] ">
                        Portfolio Website
                    </h3>

                    <p className="text-[#666]">
                        A personal portfolio site to showcase my skills and projects.
                    </p>
                </div>
                <div className="border-t border-l border-amber-500 p-5 rounded-xl shadow-[2px_4px_0px_rgba(255,0,0,1)]" onClick={console.log("clicked me!")}>
                    <h3 className="mb-2.5 text-[20px] ">
                        Portfolio Website
                    </h3>

                    <p className="text-[#666]">
                        A personal portfolio site to showcase my skills and projects.
                    </p>
                </div>
                <div className="border-t border-l border-amber-500 p-5 rounded-xl shadow-[2px_4px_0px_rgba(255,0,0,1)]" onClick={console.log("clicked me!")}>
                    <h3 className="mb-2.5 text-[20px] ">
                        Portfolio Website
                    </h3>

                    <p className="text-[#666]">
                        A personal portfolio site to showcase my skills and projects.
                    </p>
                </div>
                <div className="border-t border-l border-amber-500 p-5 rounded-xl shadow-[2px_4px_0px_rgba(255,0,0,1)]" onClick={console.log("clicked me!")}>
                    <h3 className="mb-2.5 text-[20px] ">
                        Portfolio Website
                    </h3>

                    <p className="text-[#666]">
                        A personal portfolio site to showcase my skills and projects.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects