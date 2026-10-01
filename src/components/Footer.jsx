import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-shell">
        <div className="footer-links" aria-label="footer links">
          <a href="mailto:adarsh99733207@gmail.com">Email</a>
          <a href="https://github.com/Adshkumar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/adarsh-kumar-b52276343/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/resume.pdf/Adarsh_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <p className="footer-meta">© {new Date().getFullYear()} Adarsh Kumar. Built for curious engineers.</p>
      </div>
    </footer>
  );
};

export default Footer;
