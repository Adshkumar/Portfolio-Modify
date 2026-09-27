import React from "react";
import Footer from "../Footer";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "AKM Techie",
    period: "Jun 2025 – Jul 2025",
    location: "India",
    type: "PROFESSIONAL EXPERIENCE",
    overview:
      "Owned the complete frontend engineering lifecycle for DTEST — an enterprise platform comprising an administrative metrics dashboard, a secure client portal, a dynamic service showcase, and an interactive business inquiry module. Delivered a multi-page responsive application from design wireframes to production deployment.",
    technicalImpact: [
      "Engineered pixel-perfect responsive layouts for dashboard and portal views using semantic HTML5 and custom CSS3, achieving consistent rendering across Chrome, Safari, Firefox, and mobile viewports without framework dependencies.",
      "Architected a modular CSS component system with reusable class patterns and design tokens — reducing per-page stylesheet duplication by establishing a shared utility layer and eliminating ad-hoc inline overrides.",
      "Built interactive client inquiry forms with client-side regex validation pipelines: real-time field error feedback, submission debouncing to prevent duplicate requests, and async confirmation alerts using fetch-based POST handlers.",
      "Collaborated directly with cross-functional stakeholders across two design iteration cycles — managing change requests, communicating technical constraints, and delivering incremental builds against a four-week delivery timeline.",
      "Optimized static asset loading (image compression, CSS specificity reduction) to improve First Contentful Paint metrics and ensure smooth performance on mid-range mobile devices.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive UI/UX", "Form Validation", "Cross-Browser Compat", "Async Fetch API"],
    reflection: "This role established my foundation in delivering production-ready interfaces under real deadlines with real stakeholders — the discipline of managing scope, communicating trade-offs, and shipping clean code I can stand behind.",
  },
  {
    title: "Backend & Distributed Systems Engineer",
    company: "Uber Dispatch Architecture (Independent)",
    period: "Aug 2025 – Oct 2025",
    location: "India",
    type: "SYSTEM ENGINEERING",
    overview:
      "Architected a high-concurrency distributed backend replicating Uber's core ride-hailing infrastructure. This was not a tutorial build — it required solving real distributed systems problems: bidirectional real-time state synchronization, geospatial proximity queries under concurrent load, and race condition prevention in shared ride state.",
    technicalImpact: [
      "Implemented Socket.IO room-based pub/sub event pipeline where each active ride occupies an isolated channel. Driver location updates broadcast to passenger clients at sub-100ms latency; connection lifecycle events (disconnect, reconnect) trigger automatic state cleanup via server-side socket hooks.",
      "Designed MongoDB schemas with 2dsphere geospatial indexes on driver coordinate fields. $geoNear aggregation queries resolve nearest-available-driver lookups in sub-second time even under simulated concurrent passenger requests — the index eliminates full collection scans regardless of driver fleet size.",
      "Implemented Finite State Machine for ride lifecycle (Requested → Accepted → In Transit → Completed → Cancelled) with atomic MongoDB findOneAndUpdate operations using state guards — preventing race conditions where two concurrent driver acceptance requests could transition a ride past Requested state.",
      "Secured all REST endpoints and WebSocket upgrade handshakes with modular JWT bearer token middleware. Role-based permission guards (passenger vs. driver) enforce that only authorized roles can trigger specific state transitions.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "2dsphere Indexing", "JWT", "FSM Design", "REST APIs"],
    reflection: "This project taught me the gap between theoretical distributed systems knowledge and practical implementation. Race conditions, connection lifecycle management, and geospatial query performance are not problems you understand from reading — you encounter them when building.",
  },
  {
    title: "Full-Stack AI Platform Engineer",
    company: "AI Interview Simulation (Independent)",
    period: "Jan 2026 – Feb 2026",
    location: "India",
    type: "FULL-STACK & AI INTEGRATION",
    overview:
      "Designed and delivered a full-stack platform for automated mock technical interviews. The system orchestrates Gemini AI for structured rubric-based evaluation, generates dynamic PDF feedback reports via headless Puppeteer rendering, and implements proper session security including immediate server-side invalidation on logout.",
    technicalImpact: [
      "Engineered structured prompt schemas for Gemini AI evaluation — each prompt constrains the model to return JSON-formatted scores across rubric dimensions (technical accuracy, communication clarity, depth of explanation). Structured outputs eliminate post-processing parsing errors compared to unstructured text responses.",
      "Built headless PDF compilation pipeline: server spawns a Puppeteer Chromium instance, injects candidate evaluation data into a dynamic HTML template, renders to PDF, and streams the binary response as a Content-Disposition: attachment download. Avoids client-side PDF libraries and keeps sensitive scoring data server-side.",
      "Implemented JWT token blacklisting using a server-side in-memory store with TTL-matched expiry windows. On logout, the active token is immediately added to the blacklist — closing the window between logout action and natural token expiry that would otherwise allow token reuse.",
      "Decoupled business logic into three independent service classes: AI communication service, PDF generation service, and candidate profile service. Controllers act as thin orchestrators; no business logic lives in route handlers. Each service can be tested and replaced independently.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "React.js", "Puppeteer", "Gemini AI API", "JWT + Blacklisting", "MVC Architecture"],
    reflection: "The hardest part was not the AI integration — it was structuring the service layer so that swapping the AI provider would not require touching the controller or PDF layer. Clean separation of concerns is not an aesthetic preference; it is an operational requirement.",
  },
  {
    title: "Real-Time Communication Platform Engineer",
    company: "Chat Engine (Independent)",
    period: "Oct 2025 – Nov 2025",
    location: "India",
    type: "SYSTEM ENGINEERING",
    overview:
      "Engineered a scalable full-stack chat platform with instant private messaging, online/offline presence tracking, conversation history persistence, and perceived-instant message delivery via optimistic UI updates on the React client.",
    technicalImpact: [
      "Built Socket.IO room management protocols for message delivery and read status synchronization. Each private conversation maintains a dedicated room; server broadcasts events to room members rather than polling clients — eliminating unnecessary network traffic.",
      "Implemented optimistic UI message updates on the React client: messages appear in the conversation thread instantly on send, before server acknowledgment. Failed sends trigger visual rollback with inline error state — maintaining perceived responsiveness without compromising data integrity.",
      "Designed MongoDB conversation aggregation pipeline with $lookup joins and cursor-based pagination for fetching chat history. Indexed on conversation ID and timestamp fields to ensure paginated loads remain O(log n) rather than degrading with conversation length.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "React.js", "Socket.IO", "JWT", "Optimistic UI", "Tailwind CSS"],
    reflection: "Optimistic UI taught me that perceived performance and actual performance are different problems. The user experience improvement from showing the message instantly is significant — but it requires careful design of the rollback path when the server rejects.",
  },
  {
    title: "Agentic AI Application Builder",
    company: "Agentic-AI Platform (Independent)",
    period: "May 2026 – Jun 2026",
    location: "India",
    type: "AI & FULL-STACK PLATFORM",
    overview:
      "Built an AI application generator that converts natural language product requirements into production-ready web application codebases with interactive previews. Uses prompt chaining — a pipeline of structured sequential Gemini API calls that incrementally build complete codebases rather than attempting single-shot full-project generation.",
    technicalImpact: [
      "Engineered multi-step prompt chaining pipeline: first call generates project structure and component inventory, subsequent calls generate individual files with full context from previously generated siblings. Chained context significantly reduces hallucination rates versus single-prompt full-project generation.",
      "Built workspace management API allowing users to create, fork, version, and delete generated application workspaces. Each workspace is a MongoDB document tree with snapshot versioning — users can restore any prior state of their generated codebase.",
      "Implemented per-user sliding-window rate limiting on AI generation endpoints using in-memory counters with TTL reset. Prevents cost runaway from automated abuse while preserving acceptable generation throughput for legitimate users.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Gemini AI", "Prompt Engineering", "Rate Limiting"],
    reflection: "Prompt chaining shifts the problem from 'write a perfect prompt' to 'design a generation workflow'. Treating AI as a service layer with defined input/output contracts at each step makes the system more reliable and debuggable than single-shot generation.",
  },
  {
    title: "URL Shortening & Analytics Microservice",
    company: "URL Shortener Platform (Independent)",
    period: "Jun 2026 – Jul 2026",
    location: "India",
    type: "SYSTEM ENGINEERING",
    overview:
      "Production-grade URL shortening microservice with low-latency redirection, collision-resistant Base-62 short-code generation, and a real-time analytics dashboard computing click distributions, referrer sources, and temporal usage patterns via MongoDB aggregation pipelines.",
    technicalImpact: [
      "Optimized MongoDB index on short-code hash fields: redirection lookups resolve in single-digit milliseconds under concurrent request load because the query is a covered index scan — zero document reads required, only index traversal.",
      "Implemented Base-62 encoding algorithm (alphanumeric charset) with collision detection loop — generated codes are verified unique against the existing index before persistence, with retry logic for the rare collision case.",
      "Constructed MongoDB aggregation pipeline computing real-time telemetry: daily click distributions ($group by date), top referrer domains ($group by referrer header), device breakdown by User-Agent parsing, and temporal usage heatmaps.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs", "Aggregation Pipelines", "Base-62 Encoding"],
    reflection: "Index design on the short-code field was the entire performance story for this service. The difference between a covered index scan and a collection scan is not a constant factor — it scales with collection size. Getting this right from the start prevented future pain.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-0 min-h-screen">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* PAGE HEADER */}
        <div className="border-b border-[#deddd7] pb-5 sm:pb-6 mb-8 sm:mb-10">
          <h1 className="font-serif italic font-bold text-2xl sm:text-3xl md:text-[38px] text-[#111111] mb-1 tracking-[-0.02em]">
            Work Experience & Engineering Roles
          </h1>
          <h3 className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-[#fa0000]">
            Professional internship, independent system builds, and the engineering reasoning behind each
          </h3>
          <p className="text-sm text-[#666666] mt-2 max-w-3xl">
            Each entry below goes beyond a bullet-point summary — it documents the specific technical decisions made, the constraints that drove them, and the lessons that carried forward. This is how I think about engineering work, not just what I built.
          </p>
        </div>

        {/* TIMELINE ENTRIES */}
        <div className="space-y-10 sm:space-y-12 mb-14 sm:mb-16">
          {experiences.map((job, idx) => (
            <div
              key={idx}
              className="pb-10 sm:pb-12 border-b border-[#deddd7] last:border-b-0"
            >
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#fa0000] uppercase tracking-widest">
                      {job.type}
                    </span>
                    <span className="text-[#aaaaaa]">·</span>
                    <span className="font-mono text-xs text-[#888888]">{job.company}</span>
                  </div>
                  <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-[26px] text-[#111111] leading-tight">
                    {job.title}
                  </h2>
                </div>
                <div className="font-mono text-xs text-[#666666] sm:text-right whitespace-nowrap flex-shrink-0 mt-1">
                  <div>{job.period}</div>
                  <div className="text-[#888888]">{job.location}</div>
                </div>
              </div>

              {/* OVERVIEW */}
              <p className="text-[15px] sm:text-[16px] text-[#333333] leading-relaxed mb-4 max-w-3xl">
                {job.overview}
              </p>

              {/* TECHNICAL IMPACT */}
              <div className="border border-[#e6e4dc] rounded-lg p-4 mb-4 bg-white/60">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888888] block mb-3">
                  Technical Contributions & Implementation Details
                </span>
                <div className="space-y-3">
                  {job.technicalImpact.map((item, i) => {
                    const colonIdx = item.indexOf(": ");
                    if (colonIdx > 0 && colonIdx < 60) {
                      const label = item.slice(0, colonIdx);
                      const body = item.slice(colonIdx + 2);
                      return (
                        <div key={i} className="text-[13.5px] text-[#444444] flex items-start gap-2 leading-relaxed">
                          <span className="text-[#fa0000] font-bold mt-0.5 flex-shrink-0">→</span>
                          <span><span className="font-bold text-[#222222]">{label}:</span> {body}</span>
                        </div>
                      );
                    }
                    return (
                      <div key={i} className="text-[13.5px] text-[#444444] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#fa0000] font-bold mt-0.5 flex-shrink-0">→</span>
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {job.skills.map((s, i) => (
                  <span
                    key={i}
                    className="font-mono text-[11px] text-[#555555] bg-white px-2 py-0.5 rounded border border-[#deddd7]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* REFLECTION */}
              {job.reflection && (
                <div className="border-l-2 border-[#deddd7] pl-3.5 mt-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#aaaaaa] block mb-0.5">What I took away</span>
                  <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed italic">{job.reflection}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA ROW */}
        <div className="border-t border-[#deddd7] pt-8 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif italic font-bold text-xl text-[#111111] mb-1">
              Available for new roles
            </h3>
            <p className="text-sm text-[#666666] max-w-lg">
              I am actively seeking software engineering positions — full-time, remote or on-site — where I can work on technically challenging problems with a team that values code quality and engineering depth.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white rounded-md font-bold text-sm hover:bg-[#333333] transition-colors self-start sm:self-auto font-sans flex-shrink-0"
          >
            Get in Touch →
          </a>
        </div>

      </div>

      {/* GLOBAL FOOTER WITH DESKTOP-ONLY GIANT WAVE BANNER */}
      <Footer />
    </section>
  );
};

export default ExperienceTimeline;
