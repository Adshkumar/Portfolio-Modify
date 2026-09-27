import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./Footer";

const LowerHero = () => {
  const systems = [
    {
      title: "Uber Real-Time Dispatch & Geolocation Engine",
      tag: "SOCKET.IO • GEOSPATIAL 2DSPHERE • FSM • JWT",
      status: "DISTRIBUTED SYSTEM",
      summary:
        "High-concurrency backend replicating Uber's ride-hailing infrastructure — Socket.IO room-based pub/sub for sub-100ms driver location broadcasting, MongoDB 2dsphere geospatial dispatch, and FSM ride lifecycle with atomic race-condition guards.",
      architecture: [
        "WebSocket Event Bus: Socket.IO room-per-ride for isolated passenger-driver sync. Disconnect hooks auto-clean stale state.",
        "Geospatial Dispatch: $geoNear on 2dsphere-indexed driver coordinates resolves nearest driver in sub-second time — no collection scans.",
        "FSM + Atomic Mutations: findOneAndUpdate with state guards prevents two drivers accepting the same ride simultaneously.",
        "Auth Layer: Role-based JWT middleware (passenger vs. driver) per route — not applied globally.",
      ],
      techs: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "2dsphere Indexing", "JWT", "FSM Design", "REST APIs"],
      liveUrl: "/projects",
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      title: "E-Commerce Platform & Order Processing Engine",
      tag: "REDUX TOOLKIT • COMPOUND INDEXING • JWT HTTP-ONLY COOKIES • MVC",
      status: "LIVE PRODUCTION",
      summary:
        "Full-stack MERN e-commerce platform — Redux Toolkit optimistic cart mutations with server rollback, compound MongoDB indexes for sub-50ms catalog queries, and JWT in HTTP-only cookies for secure session management.",
      architecture: [
        "Optimistic State: Cart mutations reflect in UI immediately; async thunks sync server-side with automatic rollback on failure.",
        "Compound Index: {category, price, inStock} compound index covers filtered catalog queries in a single index scan.",
        "Secure Sessions: JWT in HTTP-only cookies — eliminates XSS theft. Token rotation on sensitive ops.",
        "Modular MVC: Routes → controllers → service classes → Mongoose models. Global error middleware handles all unhandled errors.",
      ],
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "JWT", "REST API"],
      liveUrl: "https://e-commerece-website.vercel.app/",
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      title: "AI Interview Simulation & PDF Report Platform",
      tag: "GEMINI API • PUPPETEER PIPELINE • TOKEN BLACKLISTING • SERVICE LAYERS",
      status: "FULL-STACK PLATFORM",
      summary:
        "Full-stack mock interview platform — Gemini AI with structured JSON schema prompts for rubric evaluation, headless Puppeteer PDF generation server-side, and immediate JWT blacklisting on logout.",
      architecture: [
        "Structured AI Prompts: Output-constrained Gemini calls return typed JSON rubric scores — no text parsing required.",
        "Headless PDF: Puppeteer renders dynamic HTML → PDF on server, streamed as Content-Disposition binary download.",
        "Token Blacklisting: In-memory store with TTL matching token expiry — closes the reuse window on logout.",
        "Service Layers: AI, PDF, and profile services are independent classes. Swapping AI providers requires zero controller changes.",
      ],
      techs: ["Node.js", "Express.js", "MongoDB", "React.js", "Puppeteer", "Gemini AI API", "JWT Auth", "REST API"],
      liveUrl: "/projects",
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      title: "Agentic AI Web Application Builder",
      tag: "PROMPT CHAINING • GEMINI API • WORKSPACE VERSIONING • RATE LIMITING",
      status: "AI PLATFORM",
      summary:
        "AI code generator converting natural language requirements into deployable web apps via multi-step prompt chaining — sequential Gemini API calls build codebases incrementally, with workspace versioning and per-user rate limiting.",
      architecture: [
        "Prompt Chaining: First call generates project structure; subsequent calls generate files with context from prior siblings — reduces hallucination vs. single-shot.",
        "Workspace Versioning: MongoDB document tree with snapshot array. fork() deep-copies current state — zero file system ops.",
        "Rate Limiting: Sliding-window per-user counters prevent cost runaway while maintaining fair throughput.",
      ],
      techs: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Gemini AI", "REST API", "Tailwind CSS"],
      liveUrl: "/projects",
      githubUrl: "https://github.com/Adshkumar",
    },
  ];

  const milestones = [
    {
      period: "Jun 2025 – Jul 2025",
      role: "Software Engineering Intern",
      company: "AKM Techie",
      location: "India · Professional",
      details: [
        "Delivered DTEST — an enterprise multi-page platform with an administrative metrics dashboard, secure client portal, and dynamic service showcase. Owned the complete frontend lifecycle from wireframe to deployment.",
        "Engineered modular CSS architecture with reusable component patterns, reducing per-page stylesheet size by eliminating redundant rules and establishing a consistent design token system.",
        "Implemented client-side regex validation pipelines for form inputs with real-time error feedback and async submission alerts using fetch-based handlers.",
        "Worked directly with stakeholders to translate design requirements into accessible, cross-browser-compatible interfaces — managing feedback cycles and iterating on designs under deadline.",
      ],
      link: "/experiences",
    },
    {
      period: "Aug 2025 – Oct 2025",
      role: "Backend & Distributed Systems Engineer",
      company: "Uber Dispatch Architecture (Independent)",
      location: "System Engineering",
      details: [
        "Engineered real-time WebSocket event pipeline with Socket.IO handling concurrent passenger-driver state transitions with proper room isolation and event deduplication.",
        "Designed MongoDB schemas with 2dsphere geospatial indexing enabling sub-second proximity dispatch queries for nearest-driver matching algorithms.",
        "Implemented FSM for ride lifecycle with atomic database state transitions preventing race conditions on simultaneous driver acceptance.",
      ],
      link: "/projects",
    },
    {
      period: "Jan 2026 – Feb 2026",
      role: "Full-Stack AI Platform Engineer",
      company: "AI Interview Simulator (Independent)",
      location: "AI Engineering",
      details: [
        "Designed prompt-chained Gemini AI integration with structured output schemas for objective rubric scoring of technical interview responses.",
        "Built headless Puppeteer PDF compilation pipeline — server renders dynamic HTML templates and streams compiled PDFs as binary responses to client.",
        "Implemented JWT token blacklisting for immediate server-side session invalidation on logout, closing the window between token invalidation and natural expiry.",
      ],
      link: "/projects",
    },
    {
      period: "May 2026 – Jun 2026",
      role: "Full-Stack AI Platform Engineer",
      company: "Agentic AI Builder (Independent)",
      location: "AI Engineering",
      details: [
        "Engineered multi-step prompt chaining pipeline for incremental code synthesis with Gemini AI — each generation step uses context from prior outputs, reducing hallucination compared to single-shot generation.",
        "Built workspace versioning system allowing users to fork and snapshot generated application states with rollback support.",
        "Implemented per-user sliding-window rate limiting on AI endpoints for cost control and fair-use enforcement.",
      ],
      link: "/projects",
    },
    {
      period: "2024 – Present",
      role: "Algorithmic Problem Solving",
      company: "LeetCode (150+ Solved in C++)",
      location: "Algorithms & Complexity",
      details: [
        "Solved 150+ problems in modern C++ with focus on optimal Big-O bounds — not just accepted solutions, but solutions analyzed for time complexity, space complexity, and cache locality.",
        "Core coverage: dynamic programming (memoization + tabulation), graph algorithms (BFS/DFS/Dijkstra), sliding window, two-pointer, binary search, and bit manipulation.",
      ],
      link: "https://leetcode.com/u/Adarsh_kumar62041/",
      isExternal: true,
    },
  ];

  const engineeringPrinciples = [
    {
      label: "01",
      title: "Explicit Contracts Over Implicit Behavior",
      desc: "Request schemas validated at the boundary, response shapes consistent, error formats typed. Consumers should never read source code to understand a service.",
    },
    {
      label: "02",
      title: "Earn Your Abstractions",
      desc: "Abstractions are introduced only when they reduce duplication or improve testability — not because they look elegant in isolation.",
    },
    {
      label: "03",
      title: "Database is the Performance Boundary",
      desc: "Unindexed queries cause latency at scale — not application code. Schema design, index strategy, and aggregation pipelines are first-class architecture decisions.",
    },
    {
      label: "04",
      title: "Security is Designed In, Not Bolted On",
      desc: "JWT in HTTP-only cookies. Server-side validation regardless of client checks. Token blacklisting on logout. These are architectural constraints, not checklist items.",
    },
    {
      label: "05",
      title: "One Source of Truth for State",
      desc: "Redux slices own client state. Race conditions are addressed at the protocol level — FSMs and atomic mutations — not papered over with retry logic.",
    },
    {
      label: "06",
      title: "Ship Small, Observe in Production",
      desc: "Small reviewable changesets over large diffs. Structured logs, meaningful error codes, and deterministic failure paths are engineered from day one.",
    },
  ];

  return (
    <div className="w-full bg-transparent pb-0">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* =====================================================
            SECTION 1: SELECTED SYSTEM BUILDS
        ====================================================== */}
        <div className="pt-8 sm:pt-10 border-t border-[#deddd7] mb-14 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8 pb-3 border-b border-[#deddd7]">
            <div>
              <h2 className="font-serif italic font-bold text-xl sm:text-2xl md:text-[28px] text-[#111111]">
                Selected System Builds
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] mt-1 max-w-2xl">
                Four systems with architectural depth — each built to solve real engineering constraints around concurrency, latency, or state management. Not portfolio projects; production-grade implementations.
              </p>
            </div>
            <a
              href="/projects"
              className="text-xs sm:text-sm font-bold text-[#2222ff] hover:underline font-mono whitespace-nowrap self-start sm:self-auto"
            >
              All Systems ({8}) →
            </a>
          </div>

          <div className="space-y-10">
            {systems.map((item, idx) => (
              <div key={idx} className="pb-10 border-b border-[#e6e4dc] last:border-b-0">
                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold text-[#fa0000] uppercase tracking-wider">
                        [{item.status}]
                      </span>
                    </div>
                    <a
                      href={item.liveUrl}
                      target={item.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-serif font-bold text-lg sm:text-xl text-[#111111] hover:text-[#2222ff] transition-colors leading-tight block"
                    >
                      {item.title}
                    </a>
                    <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wider mt-1">
                      {item.tag}
                    </div>
                  </div>

                  {/* ACTION LINKS */}
                  <div className="flex items-center gap-3 self-start sm:self-auto pt-1 font-mono text-xs flex-shrink-0">
                    {item.liveUrl && item.liveUrl.startsWith("http") && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2222ff] font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>Live</span>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" />
                      </a>
                    )}
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#555555] hover:text-[#111111] flex items-center gap-1"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>

                {/* SUMMARY */}
                <p className="text-[15px] text-[#333333] leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* ARCHITECTURAL BREAKDOWN */}
                <div className="border border-[#e6e4dc] rounded-lg p-4 mb-4 space-y-3 bg-white/60">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888888] block">
                    Technical Implementation Notes
                  </span>
                  {item.architecture.map((arch, i) => {
                    const [bold, ...rest] = arch.split(": ");
                    return (
                      <div key={i} className="text-[13px] text-[#444444] leading-relaxed">
                        <span className="font-bold text-[#111111]">{bold}: </span>
                        <span>{rest.join(": ")}</span>
                      </div>
                    );
                  })}
                </div>

                {/* TECH STACK BADGES */}
                <div className="flex flex-wrap gap-1.5">
                  {item.techs.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-[#555555] bg-white px-2 py-0.5 rounded border border-[#deddd7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SECTION 2: ENGINEERING EXPERIENCE TIMELINE
        ====================================================== */}
        <div className="pt-8 border-t border-[#deddd7] mb-14 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8 pb-3 border-b border-[#deddd7]">
            <div>
              <h2 className="font-serif italic font-bold text-xl sm:text-2xl md:text-[28px] text-[#111111]">
                Engineering Experience & Milestones
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Professional internship, independent system builds, and continuous algorithmic practice — each with specific technical contributions.
              </p>
            </div>
            <a
              href="/experiences"
              className="text-xs sm:text-sm font-bold text-[#2222ff] hover:underline font-mono whitespace-nowrap self-start sm:self-auto"
            >
              Full History →
            </a>
          </div>

          <div className="space-y-7">
            {milestones.map((m, idx) => (
              <div key={idx} className="pb-6 border-b border-[#e6e4dc] last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-mono text-xs font-bold text-[#fa0000]">
                      {m.period}
                    </span>
                    <span className="text-[#aaaaaa]">·</span>
                    <a
                      href={m.link}
                      target={m.isExternal ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-sans font-bold text-base sm:text-[17px] text-[#111111] hover:text-[#2222ff] transition-colors"
                    >
                      {m.role}
                    </a>
                    <span className="text-sm text-[#555555]">@ {m.company}</span>
                  </div>
                  <span className="font-mono text-xs text-[#888888] flex-shrink-0">{m.location}</span>
                </div>

                <ul className="space-y-2 mt-2">
                  {m.details.map((detail, i) => (
                    <li key={i} className="text-[13.5px] sm:text-sm text-[#444444] flex items-start gap-2 leading-relaxed">
                      <span className="text-[#fa0000] font-bold mt-0.5 flex-shrink-0">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SECTION 3: ENGINEERING PRINCIPLES (DEEP)
        ====================================================== */}
        <div className="pt-8 border-t border-[#deddd7] mb-14 sm:mb-16">
          <div className="mb-8 pb-3 border-b border-[#deddd7]">
            <h2 className="font-serif italic font-bold text-xl sm:text-2xl md:text-[28px] text-[#111111]">
              Engineering Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-1 max-w-2xl">
              The mental models and constraints I bring to technical decisions — written out explicitly because principles you cannot articulate are principles you cannot consistently apply.
            </p>
          </div>

          <div className="space-y-6">
            {engineeringPrinciples.map((principle) => (
              <div key={principle.label} className="flex gap-5 sm:gap-6">
                <div className="flex-shrink-0">
                  <span className="font-mono text-[11px] text-[#fa0000] font-bold">{principle.label}</span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm sm:text-[15px] text-[#111111] mb-1.5">
                    {principle.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-[#555555] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* GLOBAL FOOTER WITH DESKTOP-ONLY GIANT WAVE BANNER */}
      <Footer />
    </div>
  );
};

export default LowerHero;