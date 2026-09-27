import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCheck } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [isFilling, setIsFilling] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFilling(true);
        }
      },
      { threshold: 0.05 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("adarsh99733207@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/adarsh-kumar-b52276343/", Icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/Adshkumar", Icon: FaGithub, label: "GitHub" },
    { href: "https://leetcode.com/u/Adarsh_kumar62041/", Icon: SiLeetcode, label: "LeetCode" },
    { href: "https://x.com/Adarshsingh1a", Icon: FaTwitter, label: "Twitter" },
    { href: "https://www.instagram.com/adsingh9.1/", Icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-transparent border-t border-[#deddd7] pt-8 sm:pt-10 pb-0 mb-0 text-center relative overflow-hidden"
    >
      {/* INNER CONTENT CONTAINER */}
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 mb-1">
        {/* NAME */}
        <h3 className="font-serif italic font-bold text-2xl sm:text-[26px] text-[#111111] mb-1 tracking-tight">
          Adarsh Kumar
        </h3>

        {/* LOCATION & EMAIL */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#666666] mb-3">
          <span>New Delhi, India</span>
          <span className="text-[#aeaeae]">|</span>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 font-medium text-[#2222ff] hover:underline cursor-pointer bg-transparent border-none p-0"
            title="Click to copy email address"
          >
            <span>adarsh99733207@gmail.com</span>
            {copied ? (
              <span className="inline-flex items-center gap-0.5 font-mono text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded border border-emerald-300">
                <FaCheck className="w-2.5 h-2.5" /> Copied
              </span>
            ) : (
              <span className="font-mono text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200">
                Copy
              </span>
            )}
          </button>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-3">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 sm:p-2.5 rounded-lg border border-[#deddd7] bg-white/80 text-[#555555] hover:text-[#fa0000] hover:border-[#fa0000] hover:bg-white hover:shadow-xs transition-all active:scale-95"
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-[#888888] font-mono">
          © {new Date().getFullYear()} Adarsh Kumar. All rights reserved.
        </p>
      </div>

      {/* =========================================================================
          BIG SCREEN ONLY: SUBMERGED GIANT TYPOGRAPHY WITH RISING LIQUID WAVE FILL
          Bottom half of letters is hidden / submerged below the bottom edge
      ========================================================================== */}
      <div className="hidden md:block w-full overflow-hidden select-none pointer-events-none mt-2 pb-0 mb-0">
        <svg
          viewBox="0 0 1400 115"
          className="w-full h-auto block max-h-[120px] lg:max-h-[150px] xl:max-h-[175px] mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", verticalAlign: "bottom" }}
        >
          <defs>
            {/* Text Clip Mask - baseline at y=175 cuts off the bottom half below y=115 */}
            <clipPath id="adarshLiquidMask">
              <text
                x="50%"
                y="175"
                textAnchor="middle"
                className="font-sans"
                style={{
                  fontSize: "220px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                Adarsh
              </text>
            </clipPath>
          </defs>

          {/* 1. Ghost / Light Gray Base Text */}
          <text
            x="50%"
            y="175"
            textAnchor="middle"
            className="font-sans"
            style={{
              fontSize: "220px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              fill: "#e5e3dc",
            }}
          >
            Adarsh
          </text>

          {/* 2. Fluid Animated Liquid Waves (Clipped inside the text) */}
          <g clipPath="url(#adarshLiquidMask)">
            <g className={`liquid-fill-rise ${isFilling ? "is-filling" : ""}`}>
              <g className="liquid-wave-container">
                {/* Back lighter wave layer */}
                <path
                  className="liquid-wave-layer-back"
                  d="M 0 65 Q 200 35, 400 65 T 800 65 T 1200 65 T 1600 65 T 2000 65 T 2400 65 T 2800 65 T 3200 65 V 180 H 0 Z"
                  fill="#4a526d"
                  opacity="0.55"
                />
                {/* Front dense dark slate/navy wave layer */}
                <path
                  className="liquid-wave-layer-front"
                  d="M 0 75 Q 200 45, 400 75 T 800 75 T 1200 75 T 1600 75 T 2000 75 T 2400 75 T 2800 75 T 3200 75 V 180 H 0 Z"
                  fill="#2f3448"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
