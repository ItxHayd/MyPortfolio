import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../Theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO",
    text: "Outstanding work. The project exceeded expectations in every possible way.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Founder",
    text: "Fast communication and excellent attention to detail. Would hire again.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Manager",
    text: "Delivered everything exactly as requested. A true professional.",
    rating: 4,
  },
  {
    name: "Emily Davis",
    role: "Startup Owner",
    text: "Highly recommended for modern web projects. Exceeded our timeline.",
    rating: 5,
  },
  {
    name: "David Wilson",
    role: "Product Lead",
    text: "Professional, responsive, and highly skilled. Our go-to dev.",
    rating: 5,
  },
];

const avatarColors = [
  "bg-violet-500",
  "bg-cyan-500",
  "bg-rose-500",
  "bg-emerald-500",
  "bg-amber-500",
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  const containerRef = useRef(null);
  const { isDark } = useTheme();

  const scroll = (direction) => {
    const container = containerRef.current;
    const cardWidth = container.querySelector(".testimonial-card").offsetWidth + 24;

    gsap.to(container, {
      scrollLeft:
        direction === "left"
          ? container.scrollLeft - cardWidth
          : container.scrollLeft + cardWidth,
      duration: 0.6,
      ease: "power2.inOut",
      onUpdate: updateCards,
    });
  };

  const updateCards = () => {
    const cards = document.querySelectorAll(".testimonial-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const viewportCenter = window.innerWidth / 2;
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(viewportCenter - cardCenter);
      const opacity = gsap.utils.mapRange(0, viewportCenter, 1, 0.35, distance);
      const scale = gsap.utils.mapRange(0, viewportCenter, 1, 0.9, distance);
      gsap.set(card, {
        opacity: Math.max(0.35, opacity),
        scale: Math.max(0.9, scale),
      });
    });
  };

  useGSAP(() => {
    updateCards();
    const container = containerRef.current;
    container.addEventListener("scroll", updateCards);
    window.addEventListener("resize", updateCards);

    gsap.from(".testimonial-card", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    return () => {
      container.removeEventListener("scroll", updateCards);
      window.removeEventListener("resize", updateCards);
    };
  });

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-12 text-[#00d4ff]">
          Testimonials
        </h2>

        <div className="relative">
          {/* Fade edges */}
          <div
            className={`absolute left-0 top-0 h-full w-6 md:w-24 z-20 pointer-events-none
            ${isDark
              ? "bg-linear-to-r from-black via-black/80 to-transparent"
              : "bg-linear-to-r from-white via-white/80 to-transparent"
            }`}
          />
          <div
            className={`absolute right-0 top-0 h-full w-6 md:w-24 z-20 pointer-events-none
            ${isDark
              ? "bg-linear-to-l from-black via-black/80 to-transparent"
              : "bg-linear-to-l from-white via-white/80 to-transparent"
            }`}
          />

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className={`cursor-pointer absolute left-0 md:left-2 top-1/2 -translate-y-1/2 -translate-x-1/4 z-30 p-3 rounded-full transition-all
            ${isDark
              ? "bg-zinc-900 text-white hover:bg-zinc-800"
              : "bg-white text-black hover:bg-zinc-100 shadow-md"
            }`}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className={`cursor-pointer absolute right-0 md:right-2 top-1/2 -translate-y-1/2 translate-x-1/4 z-30 p-3 rounded-full transition-all
            ${isDark
              ? "bg-zinc-900 text-white hover:bg-zinc-800"
              : "bg-white text-black hover:bg-zinc-100 shadow-md"
            }`}
          >
            <ChevronRight size={22} />
          </button>

          {/* Scrollable container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto px-[calc(50%-140px)] md:px-16 py-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`testimonial-card w-70 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 rounded-3xl border p-6 md:p-8 transition-transform flex flex-col gap-4
                ${isDark
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-white border-zinc-200"
                }`}
                style={{
                  scrollSnapAlign: "center",
                  borderTop: `3px solid #00d4ff`,
                }}
              >
                {/* Quote icon */}
                <span className="text-[#00d4ff] text-4xl leading-none font-serif select-none">
                  "
                </span>

                {/* Review text */}
                <p className={`text-sm leading-relaxed flex-1 ${isDark ? "text-zinc-300" : "text-zinc-600"}`}>
                  {item.text}
                </p>

                {/* Star rating */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < item.rating ? "text-[#00d4ff]" : isDark ? "text-zinc-700" : "text-zinc-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/30">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 ${avatarColors[index % avatarColors.length]}`}>
                    {getInitials(item.name)}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm ${isDark ? "text-white" : "text-black"}`}>
                      {item.name}
                    </h3>
                    <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}