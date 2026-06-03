"use client"

import { useEffect, useRef } from "react"
import { Howl } from "howler"

export default function ClickEffect() {
  const soundRef = useRef(null)

  useEffect(() => {
    // create sound AFTER user interaction
    const initSound = () => {
      if (!soundRef.current) {
        soundRef.current = new Howl({
          src: ["/click.mp3"],
          volume: 0.1,
        })
      }
    }

    const handleClick = (e) => {
      initSound()

      soundRef.current.play()

      const ripple = document.createElement("span")
      ripple.className = "click-ripple"

      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`

      document.body.appendChild(ripple)

      setTimeout(() => ripple.remove(), 600)
    }

    window.addEventListener("click", handleClick)

    return () => window.removeEventListener("click", handleClick)
  }, [])

  return null
}