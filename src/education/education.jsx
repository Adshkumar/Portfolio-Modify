import React from 'react';
import Footer from '../components/Footer';

const educationData = [
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Chhotu Ram Rural Institute Of Technology",
    period: "2024 – 2027",
    location: "India",
    tag: "ONGOING",
    description:
      "Comprehensive curriculum in foundational computer science — not just theory, but the frameworks I apply directly in production work. Operating systems courses inform how I think about concurrency and process scheduling. DBMS courses underpin my approach to index design and query optimization. Computer networks coursework explains the protocols I use daily (HTTP/HTTPS, WebSockets, TCP/IP).",
    coursework: [
      "Data Structures & Algorithms (C++)",
      "Relational Database Design & SQL",
      "Operating Systems & Concurrency",
      "Computer Networks & TCP/IP",
      "Object-Oriented Software Design",
      "Computer Architecture",
    ],
    highlights: [
      "Applying OS concurrency theory directly to Socket.IO event loop design and race condition prevention in shared distributed state.",
      "DBMS query optimization coursework directly informed the compound index and geospatial indexing strategies used in production projects.",
      "Computer Networks protocol study explains the WebSocket upgrade handshake, HTTP/2 multiplexing, and TLS certificate validation I encounter in backend API design.",
    ],
  },
  {
    degree: "Senior Secondary Education",
    institution: "Kids Camp International School",
    period: "2019 – 2023",
    location: "India",
    tag: "COMPLETED",
    description:
      "Strong foundation in mathematics and analytical reasoning. The discipline of working through multi-step proofs and structured problem formulation in mathematics translates directly into algorithm design — reducing a complex system problem to a sequence of well-defined subproblems.",
    coursework: [
      "Mathematics & Analytical Logic",
      "Physics & Computational Science",
      "Computer Science Fundamentals",
    ],
    highlights: [
      "Developed foundational programming intuition through structured mathematical problem solving.",
      "Mathematical rigor in proof construction formed the thinking pattern I apply to algorithm correctness analysis.",
    ],
  },
];

const selfTaughtCurriculum = [
  {
    topic: "Distributed Systems & Real-Time Event Architecture",
    period: "2025",
    details: "Deep implementation study of WebSocket event lifecycle, Socket.IO room isolation and pub/sub patterns, finite-state machine design for concurrent state transitions, and race condition prevention using atomic database operations. Learned through building the Uber dispatch engine — not from documentation alone.",
  },
  {
    topic: "Modern Frontend State & Rendering Performance",
    period: "2025",
    details: "Advanced Redux Toolkit slice design, normalized entity adapters, memoized selector composition with Reselect, optimistic mutation patterns with rollback, and React rendering boundary optimization. The e-commerce platform was the applied context where these patterns were stress-tested under realistic data volumes.",
  },
  {
    topic: "Database Indexing, Query Planning & Aggregation",
    period: "2025 – 2026",
    details: "MongoDB query plan analysis using explain(), compound index strategy based on access patterns (not just schema structure), 2dsphere geospatial index design for proximity queries, aggregation pipeline construction for analytics telemetry. Each strategy learned by implementing it in a production-context project, then measuring the performance difference.",
  },
  {
    topic: "AI Integration & Prompt Engineering",
    period: "2026",
    details: "Structured prompt design for constrained JSON output from LLM APIs, prompt chaining for incremental code generation, handling streaming responses, and designing fallback strategies when model outputs fail schema validation. Applied in the AI Interview platform and Agentic Builder projects.",
  },
  {
    topic: "Algorithmic Complexity & Low-Level C++",
    period: "2024 – Present",
    details: "150+ LeetCode problems in modern C++ with focus on: why a solution achieves its complexity class (not just what the class is), memory allocation patterns, cache locality in array traversal versus pointer-chasing data structures, and the practical difference between O(n log n) and O(n²) at real input sizes.",
  },
];

const Education = () => {
  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-0 min-h-screen">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* PAGE HEADER */}
        <div className="border-b border-[#deddd7] pb-5 sm:pb-6 mb-8 sm:mb-10">
          <h1 className="font-serif italic font-bold text-2xl sm:text-3xl md:text-[38px] text-[#111111] mb-1 tracking-[-0.02em]">
            Academic Background & Self-Directed Study
          </h1>
          <h3 className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-[#fa0000]">
            Formal education, independent engineering curriculum, and how theory connects to production systems
          </h3>
          <p className="text-sm text-[#666666] mt-2 max-w-3xl">
            I take academic coursework seriously because it teaches the "why" behind the tools — but formal education alone does not produce production engineers. This page documents both: the formal background and the self-directed curriculum built through shipping real systems.
          </p>
        </div>

        {/* FORMAL EDUCATION */}
        <div className="space-y-8 sm:space-y-10 mb-12 sm:mb-14">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="pb-8 border-b border-[#deddd7] last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] font-bold text-[#fa0000] uppercase tracking-widest">
                      {edu.tag}
                    </span>
                    <span className="text-[#aaaaaa]">·</span>
                    <span className="font-mono text-xs text-[#888888]">{edu.institution}</span>
                  </div>
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111111] leading-tight">
                    {edu.degree}
                  </h2>
                </div>
                <div className="font-mono text-xs text-[#666666] sm:text-right flex-shrink-0">
                  <div>{edu.period}</div>
                  <div className="text-[#888888]">{edu.location}</div>
                </div>
              </div>

              <p className="text-[14.5px] sm:text-[15px] text-[#333333] leading-relaxed mb-4 max-w-3xl">
                {edu.description}
              </p>

              {/* COURSEWORK */}
              <div className="border border-[#e6e4dc] rounded-lg p-4 mb-4 bg-white/60">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888888] block mb-2.5">
                  Core Disciplines & Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs text-[#444444] bg-white px-2.5 py-1 rounded border border-[#deddd7]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* APPLIED CONNECTIONS */}
              {edu.highlights && (
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#aaaaaa] block mb-2">How it connects to production work</span>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-[13px] sm:text-sm text-[#555555] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#fa0000] font-bold mt-0.5 flex-shrink-0">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SELF-DIRECTED CURRICULUM */}
        <div className="mb-12 pb-10 border-b border-[#deddd7]">
          <div className="mb-6">
            <h2 className="font-serif italic font-bold text-2xl text-[#111111] mb-2">
              Self-Directed Engineering Curriculum
            </h2>
            <p className="text-sm text-[#666666] max-w-3xl">
              Technical areas studied and applied independently — each corresponds to a real system built and a specific set of engineering problems solved. Not reading documentation in isolation; learning through implementation.
            </p>
          </div>

          <div className="space-y-6">
            {selfTaughtCurriculum.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[#fa0000] pl-4">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <strong className="text-sm sm:text-[15px] font-bold text-[#111111]">
                    {item.topic}
                  </strong>
                  <span className="font-mono text-[10px] text-[#888888]">{item.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mb-14">
          <h2 className="font-serif italic font-bold text-2xl text-[#111111] mb-4">
            Certifications & Credentials
          </h2>
          <div className="border border-[#e6e4dc] rounded-lg p-5 bg-white/60">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#fa0000] uppercase tracking-widest block mb-1.5">
                  Certificate of Completion
                </span>
                <h3 className="font-bold text-[17px] text-[#111111] mb-1">
                  Full-Stack Web Engineering
                </h3>
                <p className="text-sm text-[#555555] max-w-2xl leading-relaxed">
                  Practical training covering React architecture, Node.js RESTful API design, MongoDB schema modeling, JWT authentication, and Vercel cloud deployment — applied directly to the projects documented throughout this portfolio.
                </p>
              </div>
              <a
                href="/resume.pdf/Adarsh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill self-start font-mono text-xs font-bold flex-shrink-0"
              >
                <span>View Resume →</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* GLOBAL FOOTER WITH DESKTOP-ONLY GIANT WAVE BANNER */}
      <Footer />
    </section>
  );
};

export default Education;