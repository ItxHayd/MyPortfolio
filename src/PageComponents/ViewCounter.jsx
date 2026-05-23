import { useEffect, useState } from "react";
import { useTheme } from "../Theme";

import EyeIcon from "../components/ui/EyeIcon";

export default function ViewCounter() {
    const {isDark} = useTheme();
    const [views, setViews] = useState(0);

    useEffect(() => {
        fetch("https://portfolio-views.hayd.workers.dev/")
        .then((res) => res.json())
        .then((data) => setViews(data.views));
    }, []);

    return <div className={`flex justify-end mr-3 gap-1 md:mr-10 w-[90%] text-[10px] md:text-sm text-right max-w-300 mx-auto ${isDark ? "text-white/50" : "text-black/50"}`}>
                    <EyeIcon 
                        color={isDark ? "white" : "black"} 
                        className="size-5 md:size-6 hover:scale-110 transition-transform -translate-y-0.5"
                    />
                    {views}
            </div>
}