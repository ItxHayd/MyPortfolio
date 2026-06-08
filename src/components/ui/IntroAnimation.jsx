import { useRef , useEffect} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function IntroAnimation({ onComplete }) {

    useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalHeight = document.body.style.height;

    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.height = originalHeight;
    };
  }, []);


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
        repeat: 3,
        yoyo: true,
        ease: "none",
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
      className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black"
    >


     
      <div ref={logoRef} className="absolute flex justify-center content-center">
        <div className="relative w-70 h-20 p-2 border border-[#333] bg-[#1a1a1a] text-green-500 font-mono text-sm rounded overflow-hidden shadow-lg">

          {/* Header */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-[#333] flex items-center px-2">
            <div className="text-gray-200 text-xs">Status</div>

            <div className="ml-auto flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>
          </div>

          
          <div className="mt-8 whitespace-nowrap overflow-hidden border-r-2 border-green-500 animate-type">
            Loading...
          </div>
        </div>
      </div>

      
      <style jsx>{`
        .animate-type {
          width: 0;
          animation: typeAndDelete 4s steps(11) infinite,
            blinkCursor 0.5s step-end infinite alternate;
        }

        @keyframes blinkCursor {
          50% {
            border-right-color: transparent;
          }
        }

        @keyframes typeAndDelete {
          0%,
          10% {
            width: 0;
          }
          45%,
          55% {
            width: 6.2em;
          }
          90%,
          100% {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
}