import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Footer from "../Footer";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "All Systems" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "backend", label: "Distributed Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "tools", label: "Tools & APIs" },
  ];

  const projects = [
    {
      id: 1,
      title: "Uber Real-Time Dispatch & Geolocation Engine",
      category: "backend",
      tag: "SOCKET.IO • GEOSPATIAL 2DSPHERE • FSM • JWT",
      status: "DISTRIBUTED SYSTEM",
      description:
        "High-concurrency backend replicating Uber's ride-hailing infrastructure with real-time state synchronization, geospatial proximity queries, and FSM-governed ride lifecycle.",
      longDescription:
        "Not a tutorial clone — this implements real distributed system primitives. Socket.IO room-based pub/sub for sub-100ms driver location broadcasting. MongoDB 2dsphere indexes for geospatial $geoNear driver dispatch queries. Finite State Machine governing ride transitions (Requested → Accepted → In Transit → Completed → Cancelled) with atomic mutations preventing race conditions on simultaneous acceptance. JWT bearer middleware with role-based guards (passenger vs. driver).",
      architecture: [
        "WebSocket Architecture: Socket.IO room-per-ride isolation. Each ride channel handles driver location broadcasts and state transition events independently. Server-side disconnect handlers clean up stale room state automatically.",
        "Geospatial Dispatch: $geoNear aggregation on 2dsphere-indexed driver coordinates resolves nearest-driver queries in sub-second time — eliminates full collection scans at any fleet size.",
        "FSM with Atomic Mutations: findOneAndUpdate with state guards ensures only one driver can transition a ride past Requested state, even under concurrent acceptance requests from multiple drivers.",
        "Auth Layer: Modular JWT middleware chain — token extraction, signature verification, role assertion — applied per-route, not globally, to allow public endpoints to coexist.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "2dsphere Indexing", "JWT", "FSM Design", "REST APIs"],
      liveUrl: null,
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      id: 2,
      title: "E-Commerce Platform & Order Processing Engine",
      category: "fullstack",
      tag: "REDUX TOOLKIT • OPTIMISTIC UI • COMPOUND INDEXING • JWT HTTP-ONLY COOKIES",
      status: "LIVE PRODUCTION",
      description:
        "End-to-end MERN e-commerce platform with Redux Toolkit optimistic cart mutations, compound MongoDB indexes for sub-50ms catalog queries, and HTTP-only cookie session management.",
      longDescription:
        "Frontend uses Redux Toolkit slices with optimistic cart updates — mutations reflect in UI immediately while async thunks sync with server, with automatic rollback on failure. Backend uses compound MongoDB indexes on {category, price, inStock} enabling single-index catalog query resolution. JWT tokens stored in HTTP-only cookies (never localStorage) with bcrypt password hashing and token rotation on sensitive operations.",
      architecture: [
        "Optimistic Cart State: Redux thunks apply cart mutations locally before server confirmation. rollbackCart action fires on HTTP error — users never see loading spinners for fast operations.",
        "Compound Index Strategy: {category, price, inStock} compound index covers the three most common filter combinations in a single index scan — no separate indexes, no full collection scans.",
        "Secure Session Design: JWT in HTTP-only cookies eliminates XSS token theft. Token expiry plus rotation on password change closes session fixation window.",
        "Modular MVC: Routes → thin controllers → service classes → Mongoose models. Global Express error middleware catches and formats all unhandled errors consistently.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "JWT", "REST API"],
      liveUrl: "https://e-commerece-website.vercel.app/",
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      id: 3,
      title: "AI Interview Simulation & PDF Report Platform",
      category: "fullstack",
      tag: "GEMINI API • PUPPETEER PIPELINE • TOKEN BLACKLISTING • SERVICE LAYERS",
      status: "FULL-STACK PLATFORM",
      description:
        "Full-stack platform conducting AI-powered technical mock interviews with structured rubric evaluation, headless PDF compilation via Puppeteer, and immediate session revocation via token blacklisting.",
      longDescription:
        "Gemini API calls use structured JSON schema prompts to evaluate responses across rubric dimensions (correctness, communication, depth) — structured outputs eliminate parsing ambiguity. Puppeteer spawns headless Chromium server-side, injects candidate data into dynamic HTML templates, and streams compiled PDF as binary download. Token blacklisting with server-side TTL store provides immediate logout invalidation. Three independent service classes: AI communication, PDF generation, candidate profiling — controllers are thin orchestrators.",
      architecture: [
        "Structured AI Prompting: Output-constrained Gemini prompts return typed JSON rubric scores. No text parsing required — model is instructed to fill a predefined schema, not generate free-form output.",
        "Headless PDF Pipeline: Puppeteer renders HTML → PDF on server. Sensitive evaluation data never leaves server-side rendering; client receives binary stream with Content-Disposition: attachment.",
        "Token Blacklisting: In-memory store with TTL matching token expiry windows. On logout, current token hash added immediately — closes the gap between logout and natural expiry that would allow reuse.",
        "Service Layer Design: AI service, PDF service, and profile service are independently instantiable classes. Swapping the AI provider requires only changing the AI service — zero controller changes.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Puppeteer", "Gemini AI API", "JWT Blacklisting", "MVC"],
      liveUrl: null,
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      id: 4,
      title: "Agentic AI Web Application Builder",
      category: "fullstack",
      tag: "PROMPT CHAINING • GEMINI API • WORKSPACE VERSIONING • RATE LIMITING",
      status: "AI PLATFORM",
      description:
        "AI code generator converting natural language requirements into deployable web applications using multi-step prompt chaining — not single-shot generation — with workspace versioning and rate limiting.",
      longDescription:
        "Prompt chaining pipeline: first call generates project structure and component inventory; subsequent calls generate files with full context from previously generated siblings. Chained context significantly reduces hallucination versus single-prompt generation. Workspace versioning allows snapshot + rollback of any generation state. Per-user sliding-window rate limiting on AI endpoints prevents cost runaway while maintaining fair throughput.",
      architecture: [
        "Prompt Chaining: Multi-step generation where each API call receives prior output as context. File generation calls see the project structure and sibling files — eliminating import errors and inconsistent naming that plague single-shot generation.",
        "Workspace Versioning: MongoDB document tree per workspace with snapshot array. fork() operation deep-copies the current state to a new workspace document — zero file system operations required.",
        "Rate Limiting: Per-user sliding-window counter with TTL reset. Implemented in-process; Redis would be the production upgrade path for multi-instance deployments.",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Gemini AI", "Prompt Engineering", "Rate Limiting"],
      liveUrl: null,
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      id: 5,
      title: "Real-Time Chat Engine",
      category: "backend",
      tag: "SOCKET.IO ROOMS • OPTIMISTIC UI • CURSOR PAGINATION • PRESENCE TRACKING",
      status: "FULL-STACK SYSTEM",
      description:
        "Scalable chat platform with Socket.IO room management, optimistic message delivery with server-side rollback, cursor-based pagination for chat history, and online presence tracking.",
      longDescription:
        "Socket.IO room per conversation for isolated message delivery and read status events. React client implements optimistic message insertion — messages appear in thread on send, before server ACK, with visible rollback on failure. MongoDB aggregation with $lookup for conversation metadata and cursor-based pagination (keyed on _id, not offset) for stable chat history fetching. Online presence tracked via server-side socket registry with disconnect cleanup.",
      architecture: [
        "Room Isolation: Each conversation has a dedicated Socket.IO room. Server broadcasts to room members only — no cross-conversation event leakage, no broadcasting to offline users.",
        "Optimistic Delivery: Client generates a temporary local message ID on send. On server ACK, temporary ID is replaced with permanent server ID. On error, message is marked failed with retry option — no spinner, just immediate feedback.",
        "Cursor Pagination: History fetched using _id cursor (not page offset). Stable under concurrent inserts — offset-based pagination shifts on new messages; cursor-based does not.",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "Socket.IO", "JWT", "Optimistic UI", "Tailwind CSS"],
      liveUrl: null,
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      id: 6,
      title: "URL Shortening & Analytics Microservice",
      category: "backend",
      tag: "BASE-62 ENCODING • COVERED INDEX SCANS • AGGREGATION PIPELINES",
      status: "PRODUCTION MICROSERVICE",
      description:
        "URL shortening microservice with covered-index redirections, Base-62 collision-resistant encoding, and MongoDB aggregation analytics.",
      longDescription:
        "Redirection is the hot path — short-code lookups use a covered index scan on the hash field: zero document reads, only index traversal. Sub-10ms P99 under realistic load. Base-62 charset (alphanumeric) with collision detection loop generates concise, readable codes. Analytics pipeline uses $group by date, referrer domain, and parsed User-Agent strings to compute click distributions, top sources, and device breakdowns without separate analytics databases.",
      architecture: [
        "Covered Index Performance: Unique index on short_code field makes lookup a pure index operation — the query engine satisfies the request entirely from the B-tree without fetching any documents.",
        "Base-62 with Collision Guard: Encoding loop generates code, checks existence with indexed lookup, retries with incremented seed on collision. Collisions are rare but handled correctly — not ignored.",
        "Analytics Aggregation: Single $aggregate pipeline computes clicks-by-day, top referrers, and device breakdown. No separate analytics store — MongoDB's aggregation framework handles the compute directly on the clicks collection.",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs", "Aggregation Pipelines", "Base-62"],
      liveUrl: null,
      githubUrl: "https://github.com/Adshkumar",
    },
    {
      id: 7,
      title: "Nike Mobile Store & Gesture Client",
      category: "mobile",
      tag: "REACT NATIVE • NATIVE DRIVER ANIMATIONS • OFFLINE-FIRST ASYNCSTORAGE",
      status: "MOBILE CLIENT",
      description:
        "Cross-platform mobile shopping app with 60fps native-driver animations, offline-first AsyncStorage cart persistence, and gesture-driven product carousel.",
      longDescription:
        "Animations use useNativeDriver: true — animation values run on the native thread, not JS thread, guaranteeing 60fps regardless of JS work. AsyncStorage persists cart state locally on device — cart survives app close, network loss, and force quit without server round-trips. React Navigation stack + tab hierarchy provides native-feeling screen transitions without custom animation code.",
      architecture: [
        "Native Driver Animations: Interpolated Animated.Value drives opacity and transform on native thread. JS-thread busy state does not cause dropped frames — animations are decoupled from JS execution.",
        "Offline-First Cart: AsyncStorage write on every cart mutation. On app launch, cart state is loaded from local storage before any network request — perceived instant startup, no loading state.",
        "Navigation: Stack navigator for detail views, tab navigator for main sections. Screen options configured at route level — no prop drilling navigation config.",
      ],
      technologies: ["React Native", "Expo", "JavaScript (ES6+)", "AsyncStorage", "React Navigation", "Animated API"],
      liveUrl: null,
      githubUrl: "https://github.com/Adshkumar",
      screenshots: [
        "/images/Screenshot_20241219_230919.jpg",
        "/images/Screenshot_20241219_230932.jpg",
        "/images/Screenshot_20241219_230938.jpg",
      ],
    },
    {
      id: 8,
      title: "Weather Analytics Dashboard",
      category: "tools",
      tag: "OPENWEATHER API • GEOLOCATION • ASYNC HANDLERS • ERROR BOUNDARIES",
      status: "LIVE UTILITY",
      description:
        "Live atmospheric weather dashboard with browser geolocation, async OpenWeather API integration, exponential backoff retry logic, and dynamic condition-responsive UI.",
      longDescription:
        "Geolocation permission flow with graceful fallback to manual city search. Fetch handlers implement exponential backoff retry (3 attempts, 2x delay) before surfacing error state — handles transient API failures without user disruption. Dynamic background states keyed to OpenWeather condition codes — clear, cloudy, rain, storm each render distinct visual context.",
      architecture: [
        "Geolocation with Fallback: navigator.geolocation.getCurrentPosition with timeout. On denial or timeout, UI shifts to city search input — single code path handles both scenarios.",
        "Exponential Backoff: Fetch wrapper retries on 5xx responses with 2^n * 100ms delay. Client never shows error on first transient failure — only surfaces after exhausting retry budget.",
        "Condition-Responsive UI: Weather condition code maps to CSS class driving background gradient and icon set. State change is a single className swap — no conditional rendering trees.",
      ],
      technologies: ["JavaScript (ES6+)", "OpenWeather API", "CSS3", "HTML5", "Geolocation API"],
      liveUrl: "https://weather-app-live.vercel.app/",
      githubUrl: "https://github.com/Adshkumar",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-0 min-h-screen">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* HEADER */}
        <div className="mb-8 sm:mb-10 pb-5 border-b border-[#deddd7]">
          <h1 className="font-serif italic font-bold text-2xl sm:text-3xl md:text-[38px] text-[#111111] tracking-[-0.02em] mb-1">
            Systems & Production Builds
          </h1>
          <h2 className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-[#fa0000] mb-3">
            Distributed backends, full-stack platforms, and mobile clients — each with documented architectural decisions.
          </h2>
          <p className="text-[14.5px] sm:text-[15px] text-[#444444] leading-relaxed max-w-3xl">
            Each project below documents not just what was built, but the specific technical constraints that shaped the implementation — which indexing strategy was chosen and why, how concurrent state is managed, what security model was applied. Engineering decisions, not just technology lists.
          </p>
        </div>

        {/* FILTER PILLS */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 pb-4 border-b border-[#deddd7]">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-3 py-1.5
                rounded-md
                text-xs sm:text-[13px]
                font-bold
                transition-all
                cursor-pointer
                font-mono
                ${
                  activeFilter === filter.id
                    ? "bg-[#111111] text-white border border-[#111111]"
                    : "bg-white text-[#444444] border border-[#deddd7] hover:border-[#fa0000] hover:text-[#fa0000]"
                }
              `}
            >
              {filter.label}
              {filter.id === "all" && (
                <span className="ml-1.5 text-[10px] opacity-60">({projects.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-10 mb-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="pb-10 border-b border-[#deddd7] last:border-b-0"
            >
              {/* TITLE ROW */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] font-bold text-[#fa0000] uppercase tracking-wide">
                      [{project.status}]
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-serif font-bold text-xl sm:text-[22px] text-[#111111] hover:text-[#2222ff] transition-colors text-left cursor-pointer leading-tight block"
                  >
                    {project.title}
                  </button>
                  <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wide mt-1">
                    {project.tag}
                  </div>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs pt-1 sm:pt-0 flex-shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[#2222ff] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Live</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555555] hover:text-[#111111] flex items-center gap-1"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[#fa0000] font-bold hover:underline cursor-pointer"
                  >
                    Deep Dive →
                  </button>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[15px] sm:text-[15.5px] text-[#333333] leading-relaxed mb-4 max-w-3xl">
                {project.description}
              </p>

              {/* ARCHITECTURE BULLETS */}
              {project.architecture && (
                <div className="border border-[#e6e4dc] rounded-lg p-4 mb-4 space-y-2.5 bg-white">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888888] block">
                    Technical Implementation Notes
                  </span>
                  <div className="space-y-2.5">
                    {project.architecture.map((arch, i) => {
                      const colonIdx = arch.indexOf(": ");
                      if (colonIdx > 0 && colonIdx < 50) {
                        const label = arch.slice(0, colonIdx);
                        const body = arch.slice(colonIdx + 2);
                        return (
                          <div key={i} className="text-[13px] text-[#444444] leading-relaxed">
                            <span className="font-bold text-[#111111]">{label}: </span>
                            <span>{body}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={i} className="text-[13px] text-[#444444] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#fa0000] font-bold mt-0.5 flex-shrink-0">•</span>
                          <span>{arch}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TECH BADGES */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
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

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#faf9f6] border border-[#deddd7] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between px-6 py-4 border-b border-[#deddd7] bg-white gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#fa0000] uppercase tracking-widest block mb-1">
                  {selectedProject.tag}
                </span>
                <h2 className="font-serif italic font-bold text-xl sm:text-2xl text-[#111111] leading-tight">
                  {selectedProject.title}
                </h2>
                <span className="font-mono text-xs text-[#888888] mt-0.5 block">[{selectedProject.status}]</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="h-8 w-8 rounded-md border border-[#deddd7] flex items-center justify-center text-[#555555] hover:text-[#fa0000] hover:border-[#fa0000] transition-colors cursor-pointer flex-shrink-0 mt-1"
              >
                <FaTimes />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 overflow-y-auto space-y-5">
              <p className="text-[15px] text-[#333333] leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {selectedProject.architecture && (
                <div>
                  <h4 className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-widest mb-3">
                    Technical Implementation Notes
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.architecture.map((a, i) => {
                      const colonIdx = a.indexOf(": ");
                      if (colonIdx > 0 && colonIdx < 50) {
                        const label = a.slice(0, colonIdx);
                        const body = a.slice(colonIdx + 2);
                        return (
                          <div key={i} className="text-sm text-[#444444] leading-relaxed">
                            <span className="font-bold text-[#111111]">{label}: </span>
                            <span>{body}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={i} className="flex items-start gap-2 text-sm text-[#444444] leading-relaxed">
                          <span className="text-[#fa0000] font-bold mt-0.5">•</span>
                          <span>{a}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-widest mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-white border border-[#deddd7] text-[#222222]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <div>
                  <h4 className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-widest mb-2">
                    Application Previews
                  </h4>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {selectedProject.screenshots.map((s, idx) => (
                      <div
                        key={idx}
                        className="w-36 sm:w-44 flex-shrink-0 rounded-lg overflow-hidden border border-[#deddd7] bg-white shadow-xs"
                      >
                        <img src={s} alt="Screenshot" className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* MODAL FOOTER */}
            <div className="flex items-center justify-end gap-3 px-6 py-3.5 border-t border-[#deddd7] bg-white">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target={selectedProject.liveUrl.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="social-pill"
                >
                  <span className="icon">
                    <FaExternalLinkAlt className="w-3.5 h-3.5 text-[#fa0000]" />
                  </span>
                  <span>Open Live</span>
                </a>
              )}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <span className="icon">
                  <FaGithub className="w-4 h-4 text-[#222]" />
                </span>
                <span>View Source</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
