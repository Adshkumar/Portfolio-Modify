import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-4 sm:pb-6">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* ============================================================
            MOBILE LAYOUT: Image + Name stacked, then tagline, then content
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
            engineering, distributed systems, and full-stack software. always building.
          </h2>
          {/* Body paragraphs on mobile */}
          <div className="editorial-content">
            <p>
              I am a software engineer focused on full-stack architecture and distributed systems. My work spans event-driven backends with WebSocket state machines, geospatial database indexing, AI-integrated service pipelines, and React client architectures with deterministic state management using Redux Toolkit.
            </p>
            <p>
              On the backend, I design modular <a href="/projects">Node.js/Express</a> APIs with explicit separation of concerns — service layers, middleware guards, and schema-validated routes. On the frontend, I build <a href="/projects">React</a> interfaces that prioritize rendering performance: memoized selectors, optimistic UI mutations, and minimal re-render boundaries. For cross-platform mobile, I engineer with <a href="/projects">React Native</a> and Expo using native-driver animations and offline-first AsyncStorage caching.
            </p>
            <p>
              My database work goes beyond CRUD — I index compound queries for sub-50ms resolution, build <a href="/projects">MongoDB aggregation pipelines</a> for analytics telemetry, and model geospatial schemas with 2dsphere indexing for real-time proximity dispatch (Uber clone architecture).
            </p>
            <p>
              I complement system-level thinking with rigorous algorithm practice on <a href="https://leetcode.com/u/Adarsh_kumar62041/" target="_blank" rel="noopener noreferrer">LeetCode</a> in modern C++ — 150+ problems solved across dynamic programming, graph traversal, sliding windows, and bit manipulation. I analyze time and space complexity with the same discipline I apply to production query plans.
            </p>
            <p>
              Currently building toward senior engineering roles — I am interested in teams that ship meaningful software, prioritize code quality, and treat engineering as craft. I value clear ownership, technical depth, and systems that are observable in production.
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
            DESKTOP LAYOUT: Exact Arpit style
            - Big serif "Hey, I am Adarsh" heading
            - Red italic tagline subtitle
            - Two columns: long paragraphs left | portrait right
        ============================================================= */}
        <div className="hidden md:block">

          {/* H1 — the editorial serif heading */}
          <h1 className="font-serif italic font-bold text-[44px] lg:text-[52px] leading-[1.1] text-[#111111] tracking-[-0.02em] mb-2">
            Hey, I am Adarsh
          </h1>

          {/* Red tagline — exactly like the reference */}
          <h2 className="font-serif italic font-bold text-[20px] lg:text-[23px] text-[#fa0000] leading-snug mb-6 sm:mb-7">
            engineering, distributed systems, and full-stack software. always building.
          </h2>

          {/* TWO-COLUMN: text left (~65%), portrait right (~35%) */}
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">

            {/* LEFT — editorial body paragraphs */}
            <div className="col-span-7 lg:col-span-8 editorial-content">
              <p>
                I am a software engineer focused on full-stack architecture and distributed systems. My work spans event-driven backends with WebSocket state machines, geospatial database indexing, AI-integrated service pipelines, and React client architectures with deterministic state management using <a href="/projects">Redux Toolkit</a>.
              </p>

              <p>
                On the backend, I design modular <a href="/projects">Node.js/Express</a> APIs with explicit separation of concerns — service layers, middleware guards, and schema-validated routes. On the frontend, I build <a href="/projects">React</a> interfaces that prioritize rendering performance: memoized selectors, optimistic UI mutations, and minimal re-render boundaries. For cross-platform mobile, I engineer with <a href="/projects">React Native</a> and Expo using native-driver animations and offline-first AsyncStorage caching.
              </p>

              <p>
                My database work goes beyond CRUD — I index compound queries for sub-50ms resolution, build <a href="/projects">MongoDB aggregation pipelines</a> for analytics telemetry, and model geospatial schemas with 2dsphere indexing for real-time proximity dispatch (see my <a href="/projects">Uber dispatch engine</a>).
              </p>

              <p>
                I complement system-level thinking with rigorous algorithm practice on <a href="https://leetcode.com/u/Adarsh_kumar62041/" target="_blank" rel="noopener noreferrer">LeetCode</a> in modern C++ — 150+ problems solved across dynamic programming, graph traversal, sliding windows, and bit manipulation. I analyze time and space complexity with the same discipline I apply to production query plans.
              </p>

              <p>
                I build a lot of <a href="/projects">side projects</a> — experimenting with real-time WebSockets, AI agent integrations, and microservice architectures. Some ship to production, some are just learning vehicles, but building is always the point.
              </p>

              <p>
                Currently building toward senior engineering roles — I am interested in teams that ship meaningful software, prioritize code quality, and treat engineering as craft. I value clear ownership, technical depth, and systems that are observable in production.
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

            {/* RIGHT — portrait only, sticky, right-aligned */}
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