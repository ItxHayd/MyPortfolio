import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollIndicator from "../components/ui/ScrollIndicator";
import { useTheme } from "../Theme";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        once: true,
      },
    });

    tl.from(leftRef.current, {
      opacity: 0,
      x: "-100%",
      filter: "blur(10px)",
      duration: 0.9,
      ease: "power2.inOut",
    }).from(
      rightRef.current,
      {
        opacity: 0,
        x: "100%",
        filter: "blur(10px)",
        duration: 0.9,
        ease: "power2.inOut",
      },
      "<0.1"
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="text-center py-25 px-5"
    >
      <div className="lg:flex">
        <div
          ref={leftRef}
          className="flex-2 w-[90%] max-w-300 mx-auto"
        >
          <div
            className={`bg-cover border-4 border-[#00d4ff] rounded-full inline-block self-center h-[30vh] w-[30vh] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.75)]
              ${isDark ? "bg-black/60" : "bg-[#ddd]"}
            `}
            style={{ backgroundImage: "url(/icons/self.png)" }}
          />

          <h2 className={`text-5xl mb-2.5 ${isDark ? "text-white" : "text-[#111]"}`}>
            Hello, I'm <span className="text-[#00d4ff]">Hayd</span>
          </h2>

          <p className={`text-[20px] ${isDark ? "text-[#666]" : "text-[#444]"}`}>
            A <span className="text-[#00d4ff]">MERN</span> Stack Developer
          </p>
        </div>

        <div
          ref={rightRef}
          className="flex-3 mt-20 w-[90%] max-w-300 mx-auto"
        >
          <p className={`mt-6 text-lg text-justify leading-relaxed
            ${isDark ? "text-gray-300" : "text-gray-700"}
          `}>
            I'm a <span className="font-semibold text-[#00d4ff]">MERN Stack Developer </span>
            focused on building modern, fast, and interactive web applications.
            I specialize in creating <span className="font-semibold text-[#00d4ff]">full-stack</span> apps
            using MongoDB, Express, React, and Node.js with smooth UI/UX experiences.
          </p>

          <p className={`mt-4 block ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            I love working with modern UI libraries, and building
            scalable backend systems.
          </p>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;