import React from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js & Next.js",
      "Redux Toolkit",
      "Optimistic UI",
      "TypeScript & JavaScript",
      "Tailwind CSS",
      "React Native & Expo",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js & Express.js",
      "Socket.IO (Pub/Sub, Rooms)",
      "REST API Design (MVC)",
      "JWT Auth & Blacklisting",
      "Puppeteer (PDF Generation)",
      "Gemini AI Integration",
    ],
  },
  {
    title: "Databases & Infra",
    skills: [
      "MongoDB & Mongoose",
      "2dsphere Geospatial Index",
      "Aggregation Pipelines",
      "Compound Index Strategy",
      "PostgreSQL & MySQL",
      "Vercel Deployment",
    ],
  },
  {
    title: "Algorithms & Mobile",
    skills: [
      "C++ (LeetCode 150+ Solved)",
      "Dynamic Programming",
      "Graph Algorithms (BFS/DFS)",
      "React Native Animations",
      "AsyncStorage (Offline-First)",
      "Time & Space Complexity",
    ],
  },
];

const LowerAbout = () => {
  return (
    <div>
      {/* SECTION HEADING */}
      <div className="mb-6">
        <h2 className="font-serif italic font-bold text-xl sm:text-2xl md:text-[28px] text-[#111111] mb-1">
          Technical Skills
        </h2>
        <p className="text-xs sm:text-sm text-[#666666] max-w-2xl">
          Full-stack proficiencies — frontend, backend, databases, algorithms, and mobile.
        </p>
      </div>

      {/* SKILL MATRIX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {skillCategories.map((group) => (
          <div
            key={group.title}
            className="border border-[#e6e4dc] rounded-lg p-4 bg-white"
          >
            <h3 className="font-sans font-bold text-sm text-[#111111] mb-3 uppercase tracking-wide">
              {group.title}
            </h3>
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
          Quick Profile
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
