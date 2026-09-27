import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./Footer";

const LowerHero = () => {
  const systems = [
    {
      title: "Uber Real-Time Dispatch & Geolocation Engine",
      tag: "EVENT-DRIVEN ARCHITECTURE • SOCKET.IO • GEOSPATIAL 2DSPHERE • FSM",
      status: "DISTRIBUTED SYSTEM",
      summary:
        "Architected a high-concurrency real-time backend replicating Uber's core ride-hailing infrastructure. This is not a tutorial clone — it implements proper distributed system primitives: bidirectional WebSocket channels, geospatial proximity queries using MongoDB 2dsphere indexes, and a finite-state machine governing ride lifecycle transitions.",
      architecture: [
        "WebSocket Event Bus: Socket.IO room-based pub/sub for real-time passenger-driver state synchronization. Each active ride maintains an isolated room; driver location updates are broadcast at sub-100ms latency to connected passenger clients.",
        "Geospatial Dispatch Engine: MongoDB 2dsphere indexing on driver location fields enables $geoNear aggregation queries that resolve nearest-available-driver lookups in sub-second time, even under concurrent passenger load.",
        "Finite State Machine: Ride transitions (Requested → Accepted → In Transit → Completed → Cancelled) are handled with atomic database mutations and server-side state guards — preventing race conditions where two drivers could accept the same ride simultaneously.",
        "Auth Layer: Modular JWT bearer token middleware with role-based guards (passenger vs. driver) protecting mission-critical endpoints from unauthorized state mutations.",
      ],
      techs: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "2dsphere Indexing", "JWT", "FSM Design", "REST APIs"],
      liveUrl: "/projects",
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      title: "E-Commerce Platform & Order Processing Engine",
      tag: "FULL-STACK MERN • REDUX TOOLKIT • PAYMENT GATEWAY • COMPOUND INDEXING",
      status: "LIVE PRODUCTION",
      summary:
        "End-to-end e-commerce platform supporting complete shopping lifecycles. The frontend uses Redux Toolkit slice-based state with optimistic cart mutations (updates reflect instantly in UI before server confirmation). The backend implements compound MongoDB indexes specifically tuned for catalog queries — avoiding full collection scans even at high product volume.",
      architecture: [
        "Optimistic State Architecture: Redux Toolkit slices manage cart state with optimistic updates — the UI reflects mutations immediately while async thunks sync with the server in the background, with rollback logic on failure.",
        "Compound Index Strategy: MongoDB product collection uses compound indexes on {category, price, inStock} allowing single-index query resolution for filtered catalog pages, reducing query latency to sub-50ms under realistic catalog volumes.",
        "Secure Checkout Pipeline: JWT tokens stored in HTTP-only cookies (not localStorage) with token rotation on sensitive operations. bcrypt hashing with configurable salt rounds for password storage.",
        "Modular MVC Backend: Express.js routes → controller handlers → service classes → Mongoose models. Each layer has a single responsibility; error handling is centralized through a global Express error middleware.",
      ],
      techs: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "JWT", "REST API"],
      liveUrl: "https://e-commerece-website.vercel.app/",
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      title: "AI Interview Simulation & PDF Compilation Platform",
      tag: "AI ORCHESTRATION • GEMINI API • PUPPETEER PIPELINE • TOKEN BLACKLISTING",
      status: "FULL-STACK PLATFORM",
      summary:
        "Full-stack platform that conducts automated technical mock interviews using Gemini AI, generates structured scoring rubrics, and compiles dynamic PDF feedback reports via headless Puppeteer rendering. The system decouples AI communication, document generation, and candidate profiling into independent service classes — making each concern independently testable and replaceable.",
      architecture: [
        "AI Prompt Engineering: Gemini API calls use structured schema prompts with explicit output constraints — the model evaluates candidate answers against predefined rubric dimensions (correctness, communication, depth) and returns JSON-structured scores.",
        "Headless PDF Pipeline: Puppeteer spins a headless Chromium instance on the server, renders a dynamic HTML evaluation template with injected candidate data, then streams the compiled PDF binary directly to the client as a download response.",
        "Session Security: Token blacklisting implemented in a server-side in-memory store (with TTL expiry). On logout, the current JWT is immediately invalidated — preventing reuse even before natural token expiry.",
        "Service Layer Separation: AI communication, PDF generation, and candidate profiling are encapsulated in dedicated service classes. Controllers are thin orchestrators; business logic never lives in route handlers.",
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
        "AI application generator that converts natural language requirements into deployable web application codebases with live previews. Uses prompt chaining — a sequence of structured Gemini API calls that incrementally build, verify, and optimize the generated code rather than producing it in a single shot.",
      architecture: [
        "Prompt Chaining Pipeline: Multi-step AI orchestration — first call generates project structure, subsequent calls fill individual files with context from previously generated code. This reduces hallucination rates compared to single-shot generation.",
        "Workspace Management: Users can create, fork, and version generated applications. Each workspace is a separate MongoDB document tree with snapshot versioning allowing rollback to any prior state.",
        "Rate Limiting & Abuse Prevention: Per-user rate limiting on AI generation endpoints using sliding-window counters stored in-memory, preventing runaway API cost from abuse while maintaining fair-use for legitimate users.",
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
      desc: "API contracts are defined at the boundary — request schemas validated, response shapes typed, error formats consistent. Consumers should never need to read source code to understand what a service does or how it fails. This extends to internal service interfaces: function signatures over ambient state, explicit dependencies over hidden singletons.",
    },
    {
      label: "02",
      title: "Complexity Budget — Earn Your Abstractions",
      desc: "Every abstraction layer has a cost: indirection, onboarding overhead, and maintenance surface. I treat complexity as a budget to be spent deliberately. New abstractions are introduced only when they pay for themselves in reduced duplication or improved testability — not because they look elegant in isolation.",
    },
    {
      label: "03",
      title: "Database is the Performance Boundary",
      desc: "Application code rarely causes latency at scale — unindexed queries do. I approach every data access pattern with the question: what indexes make this query a covered scan? Compound indexes on read-heavy collections, aggregation pipelines over N+1 loops, and geospatial indexes for spatial queries are first-class design decisions.",
    },
    {
      label: "04",
      title: "Security is an Architecture Decision, Not a Feature",
      desc: "JWT tokens in HTTP-only cookies (not localStorage). Input validation at the API boundary, never only client-side. Token blacklisting for immediate session revocation. bcrypt with tuned salt rounds. These are not checklist items — they are architectural constraints that must be considered when designing service interactions.",
    },
    {
      label: "05",
      title: "State Should Have One Source of Truth",
      desc: "Synchronization bugs happen when the same logical state lives in multiple places. Redux Toolkit slices establish single ownership of client state; server state is fetched and cached in a predictable flow with explicit invalidation. Race conditions in real-time systems are addressed at the protocol level (FSMs, atomic mutations) not papered over with retry logic.",
    },
    {
      label: "06",
      title: "Ship Incrementally, Observe in Production",
      desc: "Good software is not built in isolation. Small, reviewable changesets are easier to reason about than large diffs. Production observability — structured logs, meaningful error messages, and deterministic error codes — is engineered from day one, not bolted on when something breaks.",
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