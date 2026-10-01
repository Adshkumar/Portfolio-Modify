import React from "react";
import Footer from "./Footer";

const featuredWork = [
  {
    number: "01",
    category: "REAL-TIME BACKEND",
    title: "Ride dispatch and geolocation",
    summary:
      "Built driver matching around geospatial queries, per-ride Socket.IO rooms, and guarded ride-state transitions.",
    technologies: "Node.js / MongoDB 2dsphere / Socket.IO / FSM",
  },
  {
    number: "02",
    category: "AI PRODUCT",
    title: "Interview simulation platform",
    summary:
      "Connected structured Gemini evaluations to server-generated PDF reports, with token revocation for immediate logout.",
    technologies: "React / Node.js / Gemini API / Puppeteer",
  },
  {
    number: "03",
    category: "MESSAGING SYSTEM",
    title: "Real-time chat engine",
    summary:
      "Designed conversation-scoped delivery, optimistic sends with failure recovery, and cursor-based message history.",
    technologies: "React / Node.js / Socket.IO / MongoDB",
  },
];

const LowerHero = () => (
  <>
    <div className="page-shell doc-shell lower-home">
      <section className="story-section lower-home-section" aria-labelledby="selected-work-title">
        <div className="section-head compact-head">
          <p className="lower-section-kicker">PROJECTS / SYSTEMS / DECISIONS</p>
          <h2 id="selected-work-title">Selected work</h2>
          <p className="lower-section-intro">
            A few systems I have built, with the engineering decisions that shaped them.
          </p>
        </div>

        <div className="featured-work-list">
          {featuredWork.map((work) => (
            <article className="featured-work-item" key={work.number}>
              <span className="featured-work-number">{work.number}</span>
              <div className="featured-work-main">
                <p className="featured-work-category">{work.category}</p>
                <h3>{work.title}</h3>
                <p className="featured-work-summary">{work.summary}</p>
              </div>
              <p className="featured-work-stack">{work.technologies}</p>
            </article>
          ))}
        </div>

        <a className="lower-section-link" href="/projects">
          Explore all projects
        </a>
      </section>

      <section className="story-section lower-home-section" aria-labelledby="experience-title">
        <div className="section-head compact-head">
          <p className="lower-section-kicker">EXPERIENCE / OWNERSHIP</p>
          <h2 id="experience-title">Work and practice</h2>
        </div>

        <div className="experience-highlight">
          <p className="experience-highlight-period">Jun - Jul 2025</p>
          <div className="experience-highlight-main">
            <h3>Software Engineering Intern</h3>
            <p className="experience-highlight-company">AKM Techie</p>
            <p className="experience-highlight-summary">
              Owned the DTEST frontend from wireframes through production, building the admin dashboard,
              client portal, and service pages while iterating with stakeholders.
            </p>
          </div>
        </div>

        <div className="lower-home-actions">
          <a className="lower-section-link" href="/experiences">
            Full experience
          </a>
          <a className="lower-section-link" href="/contact">
            Get in touch
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </>
);

export default LowerHero;