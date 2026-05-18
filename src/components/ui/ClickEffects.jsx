"use client"

import { useEffect } from "react"
import { Howl } from "howler"


const clickSound = new Howl({
  src: ["/click.mp3"],
  volume: 0.2,
})

export default function ClickEffect() {
  useEffect(() => {
    const handleClick = (e) => {
     
      clickSound.play()

     
      const ripple = document.createElement("span")

      ripple.className = "click-ripple"

      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`

      document.body.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}