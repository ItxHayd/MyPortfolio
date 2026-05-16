import * as motion from "motion/react-client"
import { useState } from "react"
import { useTheme } from "../../Theme"

export default function ToggleIcon() {
  
  const [isOn, setIsOn] = useState(false)
  const { isDark, setDark } = useTheme();

  

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
        setDark(!isDark);
        console.log(isDark);
      }}
      className={`w-12 h-6 rounded-full translate-x-5 cursor-pointer pr-1 flex bg-red-500 ${isOn ? "justify-start" : "justify-end"}`}
      
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          visualDuration: 0.5,
          bounce: 0.2,
        }}
        className="w-4.5 h-4 translate-y-1 translate-x-0.5 rounded-full bg-[#9911ff]"
      />
    </button>
  )
}