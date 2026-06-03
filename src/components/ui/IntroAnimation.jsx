import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function IntroAnimation({ onComplete }) {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete });

    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.9,
      ease: "power2.out",
    })
    .to(logoRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: "none",
      yoyo: true,
      repeat: 3,
    })
    .to(logoRef.current, {
      opacity: 1,
      duration: 0.35,
      ease: "none",
    })
    .to([logoRef.current, overlayRef.current], {
      duration: 0.76,
      delay: 0.3,
      ease: "power3.inOut",
      onStart() {
        // calculate where the logo lives in the navbar
        const navLogo = document.querySelector("#nav-logo");
        if (!navLogo) return;
        const rect = navLogo.getBoundingClientRect();
        const logoRect = logoRef.current.getBoundingClientRect();

        gsap.to(logoRef.current, {
          x: rect.left - logoRect.left + rect.width / 2 - logoRect.width / 2,
          y: rect.top - logoRect.top + rect.height / 2 - logoRect.height / 2,
          scale: rect.width / logoRect.width,
          duration: 0.6,
          ease: "power3.inOut",
        });

        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      },
    });
  });

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
    >
      <span
        ref={logoRef}
        className="text-6xl font-inter text-[#00d4ff]"
        style={{ fontFamily: "inherit" }}
      >
        Loading ...
      </span>
    </div>
  );
}