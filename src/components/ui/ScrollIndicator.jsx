import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "../../Theme"

export default function ScrollIndicator() {
    const {isDark,setDark} = useTheme()
    return (
        <motion.div
        className={`absolute left-1/2 -translate-x-1/2 ${
            isDark ? "text-gray-400" : "text-blue-800"
        }`}
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        >
        <ChevronDown size={28} />
        </motion.div>
    )
}