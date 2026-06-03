import React from "react";
import ToggleIcon from "../components/ui/ToggleIcon";
import { motion } from "framer-motion";
import { useTheme } from "../Theme"; 
import lenis from "../components/lib/lenis.js";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Nav = () => {

  const { isDark } = useTheme();
 

  return (
    <nav 
      className={`
        sticky top-0 z-50 py-5 backdrop-blur-xl border-b transition-all duration-300 
        ${
          isDark
            ? "border-white/10 bg-[#121212]/70"
            : "border-black/10 bg-white/70"
        }
      `}
    >
      <div className="mx-auto flex w-[90%] max-w-300 items-center justify-between">
        
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => lenis.scrollTo(0,{duration:5})}
          className="no-underline"
        >
          <h1 id="nav-logo" className="text-2xl cursor-pointer font-bold tracking-tight text-[#00d4ff] transition-colors hover:text-[#00b0ff]">
            Hayd
          </h1>
        </motion.a>

        {/* Links */}

        <div id="nav" className="flex items-center gap-2 md:gap-6">
          
          {["Projects", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -2 }}
              onClick={() => lenis.scrollTo(`#${item.toLowerCase()}`,{duration:3})}
              className={`
                relative cursor-pointer text-sm md:text-base font-medium transition-all duration-300
                
                ${
                  isDark
                    ? "text-white/80 hover:text-[#ff6b6b]"
                    : "text-black/70 hover:text-[#ff6b6b]"
                }
              `}
            >
              {item}

              <span
                className="
                  absolute left-0 -bottom-1 h-0.5 w-0
                  bg-[#ff0077] transition-all duration-300
                  group-hover:w-full
                "
              />
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <div>
            <ToggleIcon className="hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;