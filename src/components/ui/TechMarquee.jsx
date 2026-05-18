"use client"

import { useTheme } from "../../Theme"

export default function TechMarquee() {
  const {isDark,setDark} = useTheme();
  
  const tech = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "CSS", icon: "/icons/css-3.svg" },
    { name: "MongoDB", icon: "/icons/MongoDB.svg" },
    { name: "JavaScript", icon: "/icons/js.svg" },
    { name: "C++", icon: "/icons/cpp.svg" },     
    { name: "Python", icon: "/icons/Python.svg" },
    { name: "Html", icon: "/icons/html-5.svg" },
    { name: "Vite", icon: "/icons/Vite.svg" },
    { name: "Express", icon: "/icons/express.svg" },
    { name: "Three.js", icon: "/icons/three.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
  ]

  return (
    <div className="w-full overflow-hidden py-6">
      
      
      <div className="flex w-max gap-4 animate-[marquee_15s_linear_infinite] hover:[animation-play-state:paused]">

        {[...tech, ...tech].map((item, i) => (
          <span
            key={i}
            className={`
              flex items-center gap-2
              px-4 py-2 rounded-xl
              ${(isDark)?"bg-white/5":"bg-black/5"} backdrop-blur-md
              border ${(isDark)?"border-white/10":"border-black/10"}
              hover:scale-105 hover:bg-white/15
              transition-all duration-300
              cursor-pointer
              shadow-lg
            `}
          >
            <img
              src={item.icon}
              className="w-5 h-5 md:w-6 md:h-6"
              alt={item.name}
            />
            <h3 className={`text-sm md:text-base ${(isDark)?"text-white/80":"text-[#121212]"}`}>
              {item.name}
            </h3>
          </span>
        ))}

      </div>

      
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </div>
  )
}