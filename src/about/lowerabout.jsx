import React from 'react';

const skillCategories = [
  {
    title: "Frontend Engineering & State Architecture",
    description: "Building deterministic, performant user interfaces with unidirectional data flows and minimal re-render boundaries.",
    skills: [
      "React.js & Next.js",
      "Redux Toolkit (Slices & Thunks)",
      "Optimistic UI Patterns",
      "TypeScript & JavaScript (ES6+)",
      "Tailwind CSS & Design Systems",
      "Web Performance Optimization",
    ],
  },
  {
    title: "Backend Services & Distributed Systems",
    description: "Architecting modular API layers, real-time WebSocket event pipelines, and AI service integrations.",
    skills: [
      "Node.js & Express.js",
      "Socket.IO (Rooms & Pub/Sub)",
      "RESTful API Design (MVC)",
      "JWT Auth & Token Blacklisting",
      "Puppeteer (Headless PDF Gen)",
      "Gemini AI / LLM Integration",
    ],
  },
  {
    title: "Databases, Indexing & Query Optimization",
    description: "Designing schemas for access patterns first, not just logical structure — compound indexes, geospatial queries, and aggregation pipelines.",
    skills: [
      "MongoDB & Mongoose ODM",
      "2dsphere Geospatial Indexing",
      "Compound Index Strategy",
      "Aggregation Pipelines",
      "PostgreSQL & MySQL",
      "Vercel Cloud Deployment",
    ],
  },
  {
    title: "Algorithms, Complexity & Mobile Engineering",
    description: "C++ algorithm practice focused on asymptotic analysis, cache efficiency, and cross-platform React Native development.",
    skills: [
      "C++ (LeetCode 150+ Solved)",
      "Time & Space Complexity Analysis",
      "Dynamic Programming & Graphs",
      "React Native & Expo",
      "Native Driver Animations",
      "Offline-First AsyncStorage",
    ],
  },
];

const LowerAbout = () => {
  return (
    <div>
      {/* SECTION HEADING */}
      <div className="mb-6">
        <h2 className="font-serif italic font-bold text-xl sm:text-2xl text-[#111111] mb-1">
          Technical Skills & Domain Expertise
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] max-w-2xl">
          Proficiencies organized by domain — with an emphasis on the specific patterns and techniques I apply within each area, not just the tool names.
        </p>
      </div>

      {/* SKILL MATRIX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {skillCategories.map((group) => (
          <div
            key={group.title}
            className="border border-[#e6e4dc] rounded-lg p-4 bg-white/60"
          >
            <h3 className="font-sans font-bold text-sm sm:text-[15px] text-[#111111] mb-1">
              {group.title}
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed mb-3">
              {group.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] px-2 py-0.5 bg-white border border-[#deddd7] rounded text-[#333333]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ENGINEERING PROFILE */}
      <div className="border-t border-[#deddd7] pt-6">
        <h3 className="font-sans font-bold text-sm sm:text-[15px] text-[#111111] mb-4">
          Quick Engineering Profile
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Location", value: "New Delhi, India" },
            { label: "Core Stack", value: "React · Node · MongoDB" },
            { label: "Algorithms", value: "C++ · 150+ LeetCode" },
            { label: "Availability", value: "Open to Roles" },
          ].map(({ label, value }) => (
            <div key={label} className="border-l-2 border-[#fa0000] pl-3">
              <span className="block font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888888] mb-0.5">
                {label}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#111111] block leading-tight">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowerAbout;