import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-[#deddd7] pt-8 sm:pt-10 pb-0 mb-0 text-center relative">
      {/* INNER CONTENT CONTAINER */}
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative mb-1">

        {/* NAME */}
        <h3 className="font-serif italic font-bold text-2xl sm:text-[26px] text-[#111111] mb-1 tracking-tight">
          Adarsh Kumar
        </h3>

        {/* TAGLINE */}
        <p className="font-sans text-sm text-[#666666] mb-3">
          Full-stack software engineer · distributed systems · always building.
        </p>

        {/* LOCATION & EMAIL */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#666666] mb-3">
          <span>New Delhi, India</span>
          <span className="text-[#aeaeae]">|</span>
          <a
            href="mailto:adarsh99733207@gmail.com"
            className="font-medium text-[#2222ff] hover:underline"
            title="Send email"
          >
            adarsh99733207@gmail.com
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center items-center gap-2.5 sm:gap-3 mb-4">
          <a
            href="https://www.linkedin.com/in/adarsh-kumar-b52276343/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg border border-[#deddd7] bg-white text-[#555555] hover:text-[#fa0000] hover:border-[#fa0000] flex items-center justify-center transition-all active:scale-95"
          >
            <FaLinkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </a>
          <a
            href="https://github.com/Adshkumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg border border-[#deddd7] bg-white text-[#555555] hover:text-[#fa0000] hover:border-[#fa0000] flex items-center justify-center transition-all active:scale-95"
          >
            <FaGithub className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </a>
          <a
            href="https://leetcode.com/u/Adarsh_kumar62041/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="w-9 h-9 rounded-lg border border-[#deddd7] bg-white text-[#555555] hover:text-[#fa0000] hover:border-[#fa0000] flex items-center justify-center transition-all active:scale-95"
          >
            <SiLeetcode className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </a>
          <a
            href="https://x.com/Adarshsingh1a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-9 h-9 rounded-lg border border-[#deddd7] bg-white text-[#555555] hover:text-[#fa0000] hover:border-[#fa0000] flex items-center justify-center transition-all active:scale-95"
          >
            <FaTwitter className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </a>
          <a
            href="https://www.instagram.com/adsingh9.1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-lg border border-[#deddd7] bg-white text-[#555555] hover:text-[#fa0000] hover:border-[#fa0000] flex items-center justify-center transition-all active:scale-95"
          >
            <FaInstagram className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </a>
        </div>

      {/* COPYRIGHT */}
      <p className="text-xs text-[#888888] font-mono">
        © {new Date().getFullYear()} Adarsh Kumar. All rights reserved.
      </p>
    </div>
    </footer>
  );
};

export default Footer;
