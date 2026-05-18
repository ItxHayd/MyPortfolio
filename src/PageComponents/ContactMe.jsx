import React from "react";
import { motion } from "framer-motion";

import XIcon from "../components/ui/XIcon";
import GithubIcon from "../components/ui/GithubIcon";
import GoogleIcon from "../components/ui/GoogleIcon";
import ReachOutIcon from "../components/ui/ReachoutIcon";

import { useTheme } from "../Theme";

const ContactMe = () => {
  const { isDark } = useTheme();

  const GMAIL_ADDRESS =
    "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCHTrNfgqqSKLNWTDJmQPtRvZmPBgBHvWTxjLqzkqxmcgrzWmlHFlBXcRwtrbVXbCtXQhg";

  const iconColor = isDark ? "#f5f5f5" : "#444";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="py-15"
    >
      <div className="w-[90%] max-w-300 mx-auto">
        
        {/* Heading */}
        <div className="flex justify-center items-center mb-5">
          <ReachOutIcon
            size={34}
            color={iconColor}
            className="translate-y-1 hover:scale-110 transition-transform duration-300"
          />

          <h2
            className={`
              ml-1 text-center font-bold text-[#00d4ff] text-2xl md:text-4xl tracking-tight`}
          >
            Reach Out
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-3">
          
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href={GMAIL_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              rounded-2xl border p-3 transition-all duration-300
              
              ${
                isDark
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-black/10 bg-black/3 hover:bg-black/6"
              }
            `}
          >
            <GoogleIcon
              size={28}
              color={iconColor}
              className="transition-transform duration-300"
            />
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ItxHayd"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              rounded-2xl border p-3 transition-all duration-300
              
              ${
                isDark
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-black/10 bg-black/3 hover:bg-black/6"
              }
            `}
          >
            <GithubIcon
              size={28}
              color={iconColor}
              className="transition-transform duration-300"
            />
          </motion.a>

          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://x.com/hayd_shafqat"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              rounded-2xl border p-3 transition-all duration-300
              
              ${
                isDark
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-black/10 bg-black/3 hover:bg-black/6"
              }
            `}
          >
            <XIcon
              size={28}
              color={iconColor}
              className="transition-transform duration-300"
            />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;