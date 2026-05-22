import { motion } from "framer-motion";
import GithubIcon from "../components/ui/GithubIcon";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../Theme"; // update path if needed

export default function ProjectCard({
  image,
  title,
  description,
  tech = [],
  github,
  demo,
  demoIsAvailable = true,
}) {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`
        group overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-md transition-all duration-300
        
        ${(isDark) ? "border-white/10 bg-white/5" : "border-black/10 bg-white"}
      `}
    >
      {/* Image */}
      <div className="relative  overflow-hidden">
        <div className="flex justify-center content-center">
          <motion.img
            src={image}
            alt={title}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="h-60 w-fit bg-center object-cover"
          />
        </div>
        <div
          className={`
            absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100
            
            ${ (isDark) ? "bg-black/20": "bg-white/10"}
          `}
        />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Title + Description */}
        <div>
          <h2
            className={`
              text-2xl font-bold tracking-tight
              
              ${ (isDark) ? "text-white"  : "text-[#121212]"}           `}
          >
            {title}
          </h2>

          <p
            className={`
              mt-2 text-sm leading-relaxed ${(isDark)? "text-white/70": "text-black/70"}
            `}
          >
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className={`
                rounded-full border px-3 py-1 text-xs font-medium transition-all
                
                ${
                  isDark
                    ? "border-white/10 bg-white/10 text-white/80"
                    : "border-black/10 bg-black/5 text-black/70"
                }
              `}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 pt-2">
          {/* Live Demo */}
           { demoIsAvailable && (<motion.a
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={`
                flex items-center gap-2 rounded-xl px-4 py-2 text-[12px] md:text-sm font-semibold transition-all
                
                ${
                  isDark
                    ? "bg-white text-black"
                    : "bg-[#121212] text-white"
                }
              `}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>)}

          {/* GitHub */}
          <motion.a
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            href={github}
            target="_blank"
            rel="noreferrer"
            className={`
              flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all
              
              ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-black/10 bg-black/5 text-[#121212] hover:bg-black/10"
              }
            `}
          >
            <GithubIcon size={16} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}