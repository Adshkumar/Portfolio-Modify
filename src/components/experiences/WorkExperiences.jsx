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
      "Built DTEST — a multi-page enterprise platform with an admin dashboard, client portal, and service showcase. Owned the full frontend lifecycle from wireframes to production deployment.",
    technicalImpact: [
      "Pixel-perfect responsive layouts using semantic HTML5 and CSS3 — consistent across Chrome, Safari, Firefox, and mobile viewports without framework dependencies.",
      "Modular CSS component system with reusable class patterns and design tokens — eliminated per-page stylesheet duplication.",
      "Client-side regex validation with real-time error feedback, submission debouncing, and async confirmation via fetch-based POST handlers.",
      "Managed two design iteration cycles directly with stakeholders — delivered incremental builds against a four-week timeline.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive UI/UX", "Form Validation", "Async Fetch API"],
    reflection: "Established my foundation in delivering production interfaces under real deadlines — managing scope, communicating trade-offs, and shipping code I can stand behind.",
  },
  {
    title: "Backend & Distributed Systems Engineer",
    company: "Uber Dispatch Architecture (Independent)",
    period: "Aug 2025 – Oct 2025",
    location: "India",
    type: "SYSTEM ENGINEERING",
    overview:
      "Built a high-concurrency distributed backend replicating Uber's ride-hailing infrastructure — real-time state sync via WebSockets, geospatial proximity queries, and FSM-governed ride lifecycle.",
    technicalImpact: [
      "Socket.IO room-based pub/sub: driver location updates broadcast to passengers at sub-100ms latency. Disconnect events trigger automatic state cleanup via server-side socket hooks.",
      "MongoDB 2dsphere geospatial indexes: $geoNear aggregation resolves nearest-driver dispatch in sub-second time — eliminates full collection scans at any fleet size.",
      "Finite State Machine (Requested → Accepted → In Transit → Completed → Cancelled) with atomic findOneAndUpdate state guards — prevents race conditions on concurrent driver acceptance.",
      "Role-based JWT middleware on REST endpoints and WebSocket upgrade handshakes — passenger vs. driver permission guards per state transition.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "2dsphere Indexing", "JWT", "FSM Design", "REST APIs"],
    reflection: "Race conditions, connection lifecycle management, and geospatial query performance are not problems you understand from reading — you encounter them when building.",
  },
  {
    title: "Full-Stack AI Platform Engineer",
    company: "AI Interview Simulation (Independent)",
    period: "Jan 2026 – Feb 2026",
    location: "India",
    type: "FULL-STACK & AI INTEGRATION",
    overview:
      "Full-stack mock interview platform — Gemini AI for structured rubric evaluation, Puppeteer PDF report generation, and server-side token blacklisting for immediate logout invalidation.",
    technicalImpact: [
      "Structured Gemini AI prompts with JSON schema constraints — model returns typed rubric scores (accuracy, communication, depth) with no text parsing required.",
      "Headless Puppeteer PDF pipeline: server renders dynamic HTML with candidate data and streams compiled PDF as binary download — evaluation data never leaves server-side rendering.",
      "JWT token blacklisting with TTL-matched in-memory store — logout immediately invalidates the active token, closing the reuse window before natural expiry.",
      "Three independent service classes (AI, PDF, candidate profile) — controllers are thin orchestrators. Swapping the AI provider requires zero controller changes.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "React.js", "Puppeteer", "Gemini AI API", "JWT + Blacklisting", "MVC Architecture"],
    reflection: "Structuring the service layer so that swapping the AI provider doesn't touch the controller or PDF layer — clean separation is not aesthetic, it's operational.",
  },
  {
    title: "Real-Time Communication Platform Engineer",
    company: "Chat Engine (Independent)",
    period: "Oct 2025 – Nov 2025",
    location: "India",
    type: "SYSTEM ENGINEERING",
    overview:
      "Full-stack chat platform with instant private messaging, online/offline presence, conversation history, and perceived-instant delivery via optimistic UI.",
    technicalImpact: [
      "Socket.IO room management per conversation — server broadcasts to room members only, eliminating unnecessary traffic and cross-conversation event leakage.",
      "Optimistic UI: messages appear instantly on send before server ACK. Failed sends trigger visible rollback with inline error state — no spinners, just feedback.",
      "MongoDB aggregation with $lookup joins and cursor-based pagination (keyed on _id, not offset) — stable under concurrent inserts, O(log n) regardless of conversation length.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "React.js", "Socket.IO", "JWT", "Optimistic UI", "Tailwind CSS"],
    reflection: "Perceived performance and actual performance are different problems. The UX improvement from showing the message instantly is significant — but it requires a careful rollback design.",
  },
  {
    title: "Agentic AI Application Builder",
    company: "Agentic-AI Platform (Independent)",
    period: "May 2026 – Jun 2026",
    location: "India",
    type: "AI & FULL-STACK PLATFORM",
    overview:
      "AI code generator that converts natural language requirements into production-ready web apps using prompt chaining — sequential Gemini API calls that build codebases incrementally.",
    technicalImpact: [
      "Multi-step prompt chaining: first call generates project structure and component inventory; subsequent calls generate files with full context from prior outputs — significantly reduces hallucination vs. single-shot generation.",
      "Workspace versioning: MongoDB document tree with snapshot array. fork() deep-copies the current state to a new workspace document — zero file system operations required for branching.",
      "Per-user sliding-window rate limiting on AI endpoints — prevents cost runaway from abuse while maintaining fair throughput for legitimate users.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Gemini AI", "Prompt Engineering", "Rate Limiting"],
    reflection: "Treating AI as a service layer with defined input/output contracts at each chaining step makes generation more reliable and debuggable than single-shot prompting.",
  },
  {
    title: "URL Shortening & Analytics Microservice",
    company: "URL Shortener Platform (Independent)",
    period: "Jun 2026 – Jul 2026",
    location: "India",
    type: "SYSTEM ENGINEERING",
    overview:
      "Production-grade URL shortening microservice with covered-index redirections, Base-62 collision-resistant encoding, and MongoDB aggregation analytics.",
    technicalImpact: [
      "Covered index on short_code field: redirections are pure index-tree traversals — zero document reads, single-digit millisecond P99 latency under concurrent load.",
      "Base-62 encoding (alphanumeric charset) with collision detection loop — rare collisions are handled correctly, not silently ignored.",
      "MongoDB aggregation pipeline computing click distributions by date, top referrer domains, and device breakdown via User-Agent parsing — no separate analytics store needed.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs", "Aggregation Pipelines", "Base-62 Encoding"],
    reflection: "Index design on the short-code field was the entire performance story. The gap between a covered index scan and a collection scan scales with collection size — get it right from the start.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-0 min-h-screen">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* PAGE HEADER */}
        <div className="border-b border-[#deddd7] pb-5 sm:pb-6 mb-8 sm:mb-10">
          <h1 className="font-serif italic font-bold text-2xl sm:text-3xl md:text-[38px] text-[#111111] mb-1 tracking-[-0.02em]">
            Work Experience
          </h1>
          <h3 className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-[#fa0000]">
            Professional internship, independent system builds, and the engineering decisions behind each.
          </h3>
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
              <div className="border border-[#e6e4dc] rounded-lg p-4 mb-4 bg-white">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888888] block mb-3">
                  Technical Contributions
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
                <div className="border-l-2 border-[#deddd7] pl-3.5 py-2.5 mt-3">
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
              Actively seeking full-time software engineering positions — remote or on-site — where I can work on hard problems with a team that values code quality and engineering depth.
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

      {/* GLOBAL FOOTER */}
      <Footer />
    </section>
  );
};

export default ExperienceTimeline;
