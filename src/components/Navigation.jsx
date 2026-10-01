import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Blogs" },
    { href: "/about", label: "Notes" },
    { href: "/experiences", label: "Videos" },
    { href: "/contact", label: "Papershelf" },
    { href: "/home", label: "Bookshelf" },
    { href: "/projects", label: "Courses" },
    { href: "/contact", label: "Talks" },
  ];

  const handleResumeClick = (e) => {
    e.preventDefault();
    const url = "/resume.pdf/Adarsh_Resume.pdf";
    window.open(url, "_blank");
    const link = document.createElement("a");
    link.href = url;
    link.download = "Adarsh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav
        className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="page-shell nav-shell">
          <Link to="/home" className="brand-mark" aria-label="Adarsh Kumar home">
            Adarsh Kumar
          </Link>

          <div className="desktop-nav" aria-label="desktop navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              if (link.isResume) {
                return (
                  <button
                    key={link.href}
                    onClick={handleResumeClick}
                    className="resume-button"
                    type="button"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button className="theme-toggle" type="button" aria-label="Toggle theme">
              ☼
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu" aria-label="mobile navigation">
          <div className="mobile-menu-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              if (link.isResume) {
                return (
                  <button
                    key={link.href}
                    onClick={(e) => {
                      handleResumeClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="mobile-resume-button"
                    type="button"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
