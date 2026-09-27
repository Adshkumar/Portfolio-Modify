import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-4 sm:pb-6">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* ============================================================
            MOBILE LAYOUT
        ============================================================= */}
        <div className="block md:hidden mb-6">
          {/* Image + name row */}
          <div className="flex items-center gap-4 mb-3">
            <img
              src="/images/adarsh.jpg"
              alt="Adarsh Kumar"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-2xl border border-[#deddd7] shadow-xs flex-shrink-0"
            />
            <div>
              <h1 className="font-serif italic font-bold text-[26px] sm:text-[32px] leading-tight text-[#111111] tracking-tight">
                Hey, I am Adarsh
              </h1>
              <span className="font-mono text-[11px] text-[#777777] block mt-0.5">
                Full-Stack Software Engineer
              </span>
            </div>
          </div>
          {/* Red tagline */}
          <h2 className="font-serif italic font-bold text-[15px] sm:text-[17px] text-[#fa0000] leading-snug mb-4">
            full-stack engineer · distributed systems · always building.
          </h2>
          {/* Body paragraphs on mobile */}
          <div className="editorial-content">
            <p>
              I build full-stack web and mobile applications — from <a href="/projects">Node.js/Express</a> APIs and <a href="/projects">MongoDB</a> schemas to <a href="/projects">React</a> and <a href="/projects">React Native</a> clients. My backend work covers real-time WebSocket pipelines with <a href="/projects">Socket.IO</a>, geospatial indexing, JWT auth, and AI service integrations with <a href="/projects">Gemini API</a>.
            </p>
            <p>
              I write clean, modular code — service layers, MVC patterns, and <a href="/projects">Redux Toolkit</a> state machines with optimistic UI. I design MongoDB schemas around access patterns: compound indexes, 2dsphere geospatial queries, and aggregation pipelines for analytics.
            </p>
            <p>
              150+ <a href="https://leetcode.com/u/Adarsh_kumar62041/" target="_blank" rel="noopener noreferrer">LeetCode</a> problems in C++ — dynamic programming, graphs, and sliding windows. Open to full-time software engineering roles.
            </p>
          </div>
          {/* Social pills */}
          <div className="social-pill-group mt-1">
            <a className="social-pill" href="https://github.com/Adshkumar" target="_blank" rel="noopener noreferrer">
              <span className="icon"><FaGithub className="w-3.5 h-3.5 text-[#111111]" /></span>
              <span>GitHub</span>
            </a>
            <a className="social-pill" href="https://www.linkedin.com/in/adarsh-kumar-b52276343/" target="_blank" rel="noopener noreferrer">
              <span className="icon"><FaLinkedin className="w-3.5 h-3.5 text-[#0077b5]" /></span>
              <span>LinkedIn</span>
            </a>
            <a className="social-pill" href="https://leetcode.com/u/Adarsh_kumar62041/" target="_blank" rel="noopener noreferrer">
              <span className="icon"><SiLeetcode className="w-3.5 h-3.5 text-[#ffa116]" /></span>
              <span>LeetCode</span>
            </a>
            <a className="social-pill" href="https://x.com/Adarshsingh1a" target="_blank" rel="noopener noreferrer">
              <span className="icon"><FaTwitter className="w-3.5 h-3.5 text-[#1da1f2]" /></span>
              <span>Twitter</span>
            </a>
            <a className="social-pill" href="https://www.instagram.com/adsingh9.1/" target="_blank" rel="noopener noreferrer">
              <span className="icon"><FaInstagram className="w-3.5 h-3.5 text-[#e1306c]" /></span>
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* ============================================================
            DESKTOP LAYOUT
        ============================================================= */}
        <div className="hidden md:block">

          {/* H1 */}
          <h1 className="font-serif italic font-bold text-[44px] lg:text-[52px] leading-[1.1] text-[#111111] tracking-[-0.02em] mb-2">
            Hey, I am Adarsh
          </h1>

          {/* Red tagline */}
          <h2 className="font-serif italic font-bold text-[20px] lg:text-[23px] text-[#fa0000] leading-snug mb-6 sm:mb-7">
            full-stack engineer · distributed systems · always building.
          </h2>

          {/* TWO-COLUMN: text left (~65%), portrait right (~35%) */}
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">

            {/* LEFT — editorial body paragraphs */}
            <div className="col-span-7 lg:col-span-8 editorial-content">
              <p>
                I build full-stack web and mobile applications — from <a href="/projects">Node.js/Express</a> APIs and <a href="/projects">MongoDB</a> schemas to <a href="/projects">React</a> and <a href="/projects">React Native</a> clients. My backend work covers real-time WebSocket pipelines with <a href="/projects">Socket.IO</a>, geospatial indexing, JWT auth, and AI service integrations with <a href="/projects">Gemini API</a>.
              </p>

              <p>
                I write clean, modular code — service layers, MVC patterns, and <a href="/projects">Redux Toolkit</a> state machines with optimistic UI. I design MongoDB schemas around access patterns: compound indexes, 2dsphere geospatial queries, and aggregation pipelines for analytics.
              </p>

              <p>
                150+ <a href="https://leetcode.com/u/Adarsh_kumar62041/" target="_blank" rel="noopener noreferrer">LeetCode</a> problems in modern C++ — dynamic programming, graphs, and sliding windows. I analyze complexity with the same discipline I apply to production query plans. Open to full-time <a href="/experiences">software engineering roles</a>.
              </p>

              {/* Social pills */}
              <div className="social-pill-group pt-1">
                <a className="social-pill" href="https://github.com/Adshkumar" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <span className="icon"><FaGithub className="w-4 h-4 text-[#111111]" /></span>
                  <span>GitHub</span>
                </a>
                <a className="social-pill" href="https://www.linkedin.com/in/adarsh-kumar-b52276343/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <span className="icon"><FaLinkedin className="w-4 h-4 text-[#0077b5]" /></span>
                  <span>LinkedIn</span>
                </a>
                <a className="social-pill" href="https://leetcode.com/u/Adarsh_kumar62041/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                  <span className="icon"><SiLeetcode className="w-4 h-4 text-[#ffa116]" /></span>
                  <span>LeetCode</span>
                </a>
                <a className="social-pill" href="https://x.com/Adarshsingh1a" target="_blank" rel="noopener noreferrer" title="Twitter / X">
                  <span className="icon"><FaTwitter className="w-4 h-4 text-[#1da1f2]" /></span>
                  <span>Twitter</span>
                </a>
                <a className="social-pill" href="https://www.instagram.com/adsingh9.1/" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <span className="icon"><FaInstagram className="w-4 h-4 text-[#e1306c]" /></span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* RIGHT — portrait */}
            <div className="col-span-5 lg:col-span-4 flex justify-end pt-1">
              <div className="sticky top-24 w-full flex justify-end">
                <img
                  src="/images/adarsh.jpg"
                  alt="Adarsh Kumar"
                  className="w-full max-w-[260px] lg:max-w-[300px] xl:max-w-[320px] aspect-square object-cover rounded-[28px] border border-[#deddd7] shadow-xs hover:shadow-md transition-all duration-300"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;