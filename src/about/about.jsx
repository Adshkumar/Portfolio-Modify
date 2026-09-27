import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LowerAbout from './lowerabout';
import Footer from '../components/Footer';

const fallbackLeetcodeStats = {
  solved: 154,
  total: 4046,
  percentage: (154 / 4046) * 100
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
          <h3 className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-[#fa0000]">
            Engineering background, technical methodology, and how I think about building software systems
          </h3>
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
                I am a full-stack software engineer based in New Delhi, India, focused on distributed systems, real-time event architectures, and production-grade web applications. My engineering background spans the full stack — from geospatial MongoDB query optimization and Socket.IO event pipeline design on the backend, to Redux Toolkit state machines and optimistic UI rendering on the frontend.
              </p>
              <p>
                I approach software with a systems-design mindset. Before writing code, I ask: what are the concurrency requirements? What indexing strategy minimizes query latency at scale? Where are the failure modes, and how should they surface to clients? This thinking informs how I model data, design API contracts, and structure state management — not just as implementation details, but as primary design decisions.
              </p>
              <p>
                Outside of production work, I practice algorithmic problem solving on LeetCode in modern C++ — not because interviews require it, but because writing optimal code under constraints trains the kind of precision that carries over to production systems. I focus on understanding <em>why</em> an algorithm works at the complexity level, not just getting accepted solutions.
              </p>
              <p>
                I am actively seeking software engineering roles where I can work on technically challenging problems, with teams that value code quality, clear ownership, and systems that are observable and maintainable in production.
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
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111111] mb-2">How I Work</h2>
          <p className="text-sm text-[#666666] mb-6">The engineering practices I apply consistently — not aspirational, but operational habits that show up in code reviews and architecture decisions.</p>

          <div className="space-y-5">
            {[
              {
                title: "I model data access patterns before writing schemas",
                desc: "The database schema should reflect how data will be queried, not just how it is logically structured. Before designing a Mongoose model, I identify the three or four most performance-critical queries, then design indexes specifically for those access patterns. For the Uber dispatch system, this meant 2dsphere geospatial indexes on driver coordinates before a single API route was written.",
              },
              {
                title: "I keep API contracts explicit and stable",
                desc: "API consumers should not need to read implementation code to understand a service. I define request schemas with validation middleware (not inline route handlers), document error responses with consistent codes and messages, and treat breaking changes to public interfaces with the same seriousness as breaking changes to a database schema.",
              },
              {
                title: "Frontend state has clear ownership boundaries",
                desc: "Component-local state for UI interactions. Redux slices for server-synchronized application state with explicit invalidation. Optimistic updates for perceived performance, with explicit rollback handlers. I treat React state management the same way I treat database transactions: operations should be deterministic and have a defined failure path.",
              },
              {
                title: "Security constraints are baked into architecture, not retrofitted",
                desc: "JWT tokens belong in HTTP-only cookies. Input validation belongs on the server, regardless of what the client validates. Session revocation needs a mechanism (token blacklisting) because token expiry alone leaves a window. These decisions are made during architecture design — adding them later breaks existing contracts.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#fa0000] pl-4">
                <h3 className="font-sans font-bold text-sm sm:text-[15px] text-[#111111] mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ALGORITHMIC PROBLEM SOLVING */}
        <div className="mb-10 pb-8 border-b border-[#deddd7]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111111]">
              Algorithmic Problem Solving
            </h2>
            <span className="font-mono text-xs text-[#fa0000] font-bold whitespace-nowrap">
              C++ · Data Structures & Complexity
            </span>
          </div>

          <p className="text-[14.5px] sm:text-[15px] text-[#444444] leading-relaxed mb-5">
            I practice on LeetCode not as interview preparation but as deliberate complexity analysis training. Every accepted solution gets reviewed for: what is the actual time complexity (not just Big-O class), what is the memory allocation pattern, and is there a version with better cache locality. I solve in modern C++ specifically because the language forces awareness of memory layout and copy vs. move semantics that higher-level languages abstract away.
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

        {/* CORE ENGINEERING PHILOSOPHY */}
        <div className="mb-10 pb-8 border-b border-[#deddd7]">
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111111] mb-2">Core Principles</h2>
          <p className="text-sm text-[#666666] mb-6">Principles that have proven durable across different stacks and project sizes.</p>

          <div className="space-y-4">
            {[
              {
                title: "Simplicity is a constraint, not a style preference",
                desc: "The simplest implementation that correctly handles all required cases is usually the best. This requires active effort to resist over-engineering — especially in early stages where future requirements are unclear.",
              },
              {
                title: "Every database query is an architecture decision",
                desc: "Unindexed queries on large collections are not a performance problem — they are a design flaw. Database access patterns should inform schema design, not the reverse.",
              },
              {
                title: "Deterministic state, always",
                desc: "If you cannot predict the exact state of your system given a sequence of inputs, you cannot debug it when it fails. This applies to Redux slices, WebSocket event streams, and API response contracts equally.",
              },
              {
                title: "Fail explicitly, not silently",
                desc: "Silent failures and swallowed errors compound into production incidents. Functions should return typed errors or throw. API responses should include structured error codes. Logs should contain enough context to reproduce the failure without a debugger.",
              },
              {
                title: "Read code more than you write it",
                desc: "Understanding existing systems — how they handle edge cases, where they cut corners, what tradeoffs they made — is more valuable than writing more code. Most engineering work is understanding, not creation.",
              },
            ].map((principle) => (
              <div key={principle.title} className="border-l-2 border-[#fa0000] pl-3.5">
                <strong className="text-[15px] font-bold text-[#111111] block mb-0.5">{principle.title}</strong>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS & TECHNICAL EXPERTISE */}
        <div className="mb-4">
          <LowerAbout />
        </div>

      </div>

      {/* GLOBAL FOOTER WITH DESKTOP-ONLY GIANT WAVE BANNER */}
      <Footer />
    </section>
  );
};

export default About;