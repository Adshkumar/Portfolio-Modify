import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LowerAbout from "./lowerabout";
import Footer from "../components/Footer";

const fallbackLeetcodeStats = {
  solved: 154,
  total: 4046,
  percentage: (154 / 4046) * 100,
};

const About = () => {
  const [leetcodeStats, setLeetcodeStats] = useState(fallbackLeetcodeStats);

  useEffect(() => {
    let isMounted = true;
    const fetchStats = async () => {
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/user/Adarsh_kumar62041");
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data.totalSolved >= 0 && data.totalQuestions > 0) {
          setLeetcodeStats({
            solved: data.totalSolved,
            total: data.totalQuestions,
            percentage: Math.min((data.totalSolved / data.totalQuestions) * 100, 100),
          });
        }
      } catch {
        // fallback
      }
    };
    fetchStats();
    const interval = setInterval(fetchStats, 60000);
    window.addEventListener("focus", fetchStats);
    return () => {
      isMounted = false;
      clearInterval(interval);
      window.removeEventListener("focus", fetchStats);
    };
  }, []);

  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-0 min-h-screen">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* PAGE HEADER */}
        <div className="border-b border-[#deddd7] pb-5 sm:pb-6 mb-8 sm:mb-10">
          <h1 className="font-serif italic font-bold text-2xl sm:text-3xl md:text-[38px] text-[#111111] mb-1 tracking-[-0.02em]">
            About
          </h1>
          <h3 className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-[#fa0000] mb-2">
            Full-stack engineer based in New Delhi — building distributed systems and production-grade web apps.
          </h3>
          <p className="text-sm text-[#666666] max-w-3xl mt-2">
            I take academic coursework seriously because it teaches the "why" behind the tools — but formal education alone does not produce production engineers. This page documents both: the formal background and the self-directed curriculum built through shipping real systems.
          </p>
        </div>

        {/* PROFILE + BIO */}
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 mb-10 sm:mb-12 pb-8 sm:pb-10 border-b border-[#deddd7]">
          <div className="flex-shrink-0">
            <img
              src="/images/Adarshclg.png"
              alt="Adarsh Kumar"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-2xl border border-[#deddd7] shadow-xs"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111111]">Adarsh Kumar</h2>
              <span className="font-mono text-[11px] text-[#888888] border border-[#deddd7] px-2 py-0.5 rounded">Full-Stack SDE</span>
              <span className="font-mono text-[11px] text-[#fa0000] border border-[#fa0000]/30 bg-[#fa0000]/5 px-2 py-0.5 rounded">Open to Roles</span>
            </div>

            <div className="content editorial-content text-[#333333] space-y-0 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              <p>
                I'm a full-stack software engineer from New Delhi — I build real-time backends with Node.js, Express, MongoDB, and Socket.IO, and React/Redux Toolkit frontends with optimistic UI and clean state management.
              </p>
              <p>
                My work includes distributed systems (Uber-style dispatch with 2dsphere geospatial indexing and FSM ride lifecycle), AI-integrated platforms (Gemini API, Puppeteer PDF pipelines), and cross-platform mobile apps with React Native and Expo.
              </p>
              <p>
                I practice algorithmic problem solving on LeetCode in C++ — 150+ problems across dynamic programming, graphs, and sliding windows. I'm actively looking for software engineering roles where I can work on hard problems with teams that care about quality.
              </p>
            </div>

            <div className="social-pill-group mt-5 sm:mt-6">
              <a className="social-pill" href="https://github.com/Adshkumar" target="_blank" rel="noopener noreferrer">
                <span className="icon"><FaGithub className="w-3.5 h-3.5" /></span>
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
            </div>
          </div>
        </div>

        {/* HOW I WORK SECTION */}
        <div className="mb-10 pb-8 border-b border-[#deddd7]">
          <h2 className="font-serif italic font-bold text-xl sm:text-2xl md:text-[28px] text-[#111111] mb-2">
            How I Work
          </h2>
          <p className="text-sm text-[#666666] mb-6 max-w-2xl">
            Operational habits that show up in code reviews and architecture decisions — not aspirational, just how I actually build.
          </p>

          <div className="space-y-5">
            {[
              {
                title: "Schema design follows access patterns, not logic",
                desc: "Before writing a Mongoose model, I identify the performance-critical queries and design indexes for those patterns. For the Uber dispatch system, 2dsphere indexes on driver coordinates came before any API route.",
              },
              {
                title: "API contracts are explicit and stable",
                desc: "Request validation lives in middleware, not route handlers. Error responses follow consistent codes and messages. Breaking changes to public interfaces are treated as seriously as schema migrations.",
              },
              {
                title: "Frontend state has clear ownership boundaries",
                desc: "Component-local state for UI. Redux slices for server-synchronized state with explicit invalidation. Optimistic updates for perceived performance, with rollback on failure.",
              },
              {
                title: "Security is designed in, not bolted on",
                desc: "JWT in HTTP-only cookies. Server-side input validation regardless of client checks. Token blacklisting on logout — expiry alone leaves a reuse window.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#fa0000] pl-4 py-2"
              >
                <h3 className="font-sans font-bold text-sm sm:text-[15px] text-[#111111] mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ALGORITHMIC PROBLEM SOLVING */}
        <div className="mb-10 pb-8 border-b border-[#deddd7]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
            <h2 className="font-serif italic font-bold text-xl sm:text-2xl md:text-[28px] text-[#111111]">
              LeetCode — Algorithmic Practice
            </h2>
            <span className="font-mono text-xs text-[#fa0000] font-bold whitespace-nowrap">
              C++ · DSA · Complexity Analysis
            </span>
          </div>

          <p className="text-[14.5px] sm:text-[15px] text-[#444444] leading-relaxed mb-5 max-w-3xl">
            I solve in C++ — not just for interviews, but because the language forces awareness of memory layout, copy vs. move semantics, and cache efficiency that higher-level languages abstract away. Every solution gets reviewed for actual time complexity, not just Big-O class.
          </p>

          <div className="bg-white border border-[#deddd7] rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 font-mono text-xs text-[#555555] mb-3">
              <span className="font-bold text-[#111111] uppercase tracking-wider">
                LeetCode Progress — Adarsh_kumar62041
              </span>
              <span className="font-semibold text-[#fa0000]">
                {leetcodeStats.solved} / {leetcodeStats.total} Solved ({leetcodeStats.percentage.toFixed(1)}%)
              </span>
            </div>
            <div className="bg-[#f0ede6] rounded-full h-2 overflow-hidden mb-4">
              <div
                className="bg-[#fa0000] h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${leetcodeStats.percentage}%` }}
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              {[
                { topic: "Dynamic Programming", note: "Memoization + Tabulation" },
                { topic: "Graphs & Trees", note: "BFS, DFS, Dijkstra" },
                { topic: "Sliding Window", note: "Variable & Fixed Frames" },
                { topic: "Two Pointer", note: "Sorted Arrays & Partitions" },
              ].map(({ topic, note }) => (
                <div key={topic} className="border-l-2 border-[#deddd7] pl-2.5">
                  <span className="block text-[#111111] font-bold text-[11px]">{topic}</span>
                  <span className="block text-[#888888] text-[10px] mt-0.5">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS & TECHNICAL EXPERTISE */}
        <div className="mb-4">
          <LowerAbout />
        </div>

      </div>

      {/* GLOBAL FOOTER */}
      <Footer />
    </section>
  );
};

export default About;
