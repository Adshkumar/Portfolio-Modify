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
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experiences", label: "Experiences" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume.pdf/Adarsh_Resume.pdf", label: "Get Resume", isResume: true },
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
      {/* FIXED NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-[#deddd7] transition-all duration-200 ${
          isScrolled
            ? "bg-[#faf9f6]/95 backdrop-blur-md shadow-xs"
            : "bg-[#faf9f6]"
        }`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20 h-[52px] sm:h-[56px] flex items-center justify-between">
          {/* BRAND: Pure Editorial Serif Heading */}
          <Link
            to="/home"
            className="font-serif italic font-bold text-xl sm:text-2xl text-[#111111] tracking-tight hover:text-[#fa0000] transition-colors"
          >
            Adarsh Kumar
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              if (link.isResume) {
                return (
                  <button
                    key={link.href}
                    onClick={handleResumeClick}
                    className="ml-2 px-3 py-1 rounded-md border border-[#aeaeae] bg-white text-[#333333] text-[13px] font-bold cursor-pointer font-sans transition-all hover:border-[#fa0000] hover:text-[#fa0000] hover:shadow-2xs active:scale-95"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-1.5 text-sm transition-all duration-150 font-sans font-bold border-b-[4px] ${
                    isActive
                      ? "border-[#fa0000] text-[#111111]"
                      : "border-transparent text-[#444444] hover:border-[#fa0000] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex md:hidden p-1.5 rounded-md text-[#333333] hover:text-[#fa0000] transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <div className="fixed top-[52px] sm:top-[56px] left-0 right-0 z-40 bg-[#faf9f6] border-b border-[#deddd7] px-3 py-3 shadow-lg md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 max-w-md mx-auto">
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
                    className="w-full mt-2 py-2.5 px-4 rounded-md border border-[#aeaeae] bg-white text-[#333333] text-sm font-bold cursor-pointer font-sans transition-all hover:border-[#fa0000] hover:text-[#fa0000] text-center shadow-2xs"
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
                  className={`flex items-center px-3.5 py-2.5 rounded-md text-sm font-sans transition-all ${
                    isActive
                      ? "bg-[#fa0000]/10 border-l-4 border-[#fa0000] font-bold text-[#fa0000]"
                      : "border-l-4 border-transparent font-medium text-[#333333] hover:bg-black/5 hover:text-[#111111]"
                  }`}
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