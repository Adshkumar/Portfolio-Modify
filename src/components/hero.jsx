import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="page-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Hey, I am Adarsh</h1>

            <h2>
              engineering, databases, and systems. always building.
            </h2>

            <p className="hero-summary">
              I am a software engineer focused on building reliable products, scalable systems, and
              clean developer experiences. I work across backend architecture, product delivery, and
              thoughtful engineering decisions that stay maintainable as systems grow.
            </p>

            <p className="hero-summary">
              My work spans distributed systems, APIs, internal tools, and full-stack product builds.
              I care deeply about performance, clarity, and shipping software that is easy to reason
              about and evolve over time.
            </p>

            <p className="hero-summary">
              I enjoy building systems that combine product intuition with engineering rigor, and I am
              especially interested in backend design, data-heavy workflows, and dependable platform
              thinking.
            </p>

            <p className="hero-summary">
              I build a lot of side projects and keep iterating on ideas that help me sharpen both the
              technical and product side of software engineering.
            </p>

            <div className="hero-links" aria-label="social links and contact">
              <a className="hero-link--youtube" href="https://www.youtube.com/@Adshkumar" target="_blank" rel="noopener noreferrer">
                <FaYoutube aria-hidden="true" />
                <span>YouTube (210k)</span>
              </a>
              <a className="hero-link--twitter" href="https://x.com/Adshkumar" target="_blank" rel="noopener noreferrer">
                <FaTwitter aria-hidden="true" />
                <span>Twitter (120k)</span>
              </a>
              <a className="hero-link--linkedin" href="https://www.linkedin.com/in/adarsh-kumar-b52276343/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn aria-hidden="true" />
                <span>LinkedIn (280k)</span>
              </a>
              <a className="hero-link--github" href="https://github.com/Adshkumar" target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" />
                <span>GitHub (7k)</span>
              </a>
            </div>
          </div>

          <aside className="hero-aside" aria-label="profile image">
            <div className="portrait-frame">
              <img src="/images/adarsh.jpg" alt="Adarsh Kumar" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
