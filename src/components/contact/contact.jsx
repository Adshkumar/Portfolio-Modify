import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCheck } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Footer from "../Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [copied, setCopied] = useState(false);

  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (emailPublicKey) emailjs.init({ publicKey: emailPublicKey });
  }, [emailPublicKey]);

  const copyEmail = () => {
    navigator.clipboard.writeText("adarsh99733207@gmail.com");
    setCopied(true);
    toast.success("Email copied: adarsh99733207@gmail.com");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationClick = (e) => {
    e.preventDefault();
    const url = 'https://www.google.com/maps/search/?api=1&query=New+Delhi%2C+India';
    window.open(url, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot.trim()) return;
    if (!recaptchaSiteKey) { toast.error('CAPTCHA is not configured yet.'); return; }
    if (!captchaToken) { toast.error('Please confirm that you are not a robot.'); return; }
    if (!emailServiceId || !emailTemplateId || !emailPublicKey) { toast.error('Email delivery is not configured yet.'); return; }

    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitError('');

    try {
      const result = await emailjs.send(emailServiceId, emailTemplateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'adarsh99733207@gmail.com',
      });

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken('');
        toast.success('Thank you! Your message has been sent successfully.');
      } else {
        setSubmitStatus('error');
        setSubmitError('Sorry, there was an error sending your message.');
        toast.error('Sorry, there was an error sending your message.');
      }
    } catch (error) {
      const message = error?.text || 'Sorry, there was an error sending your message.';
      setSubmitStatus('error');
      setSubmitError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-transparent pt-16 sm:pt-24 md:pt-28 pb-0 min-h-screen">
      <div className="w-full max-w-[1400px] px-3 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* PAGE HEADER */}
        <div className="border-b border-[#deddd7] pb-5 sm:pb-6 mb-8 sm:mb-10">
          <h1 className="font-serif italic font-bold text-2xl sm:text-3xl md:text-[38px] text-[#111111] mb-1 tracking-[-0.02em]">
            Get in Touch
          </h1>
          <h3 className="font-serif italic font-medium text-base sm:text-lg md:text-xl text-[#fa0000]">
            Direct channels for engineering roles, technical discussions, and collaboration
          </h3>
          <p className="text-sm text-[#666666] mt-2 max-w-2xl">
            I respond to messages about software engineering roles, architecture discussions, and genuinely interesting technical projects. I read every message and reply to the ones where I can add value to the conversation.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mb-12 sm:mb-14">
          
          {/* LEFT: DIRECT CONTACT DETAILS */}
          <div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111111] mb-2 sm:mb-3">
              Direct Communication
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-[#444444] leading-relaxed mb-6">
              I am actively seeking full-time software engineering roles — remote or on-site — where I can work on technically meaningful problems. I am also open to architecture discussions, peer technical conversations, and high-signal freelance engineering work. Email is the fastest path; LinkedIn for professional context.
            </p>

            <div className="space-y-4 mb-6 sm:mb-8">
              {/* EMAIL */}
              <div className="border-l-2 border-[#fa0000] pl-3.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#777777] block">
                  Primary Email
                </span>
                <div className="flex flex-wrap items-center gap-2 mt-0.5">
                  <a
                    href="mailto:adarsh99733207@gmail.com"
                    className="font-bold text-sm sm:text-base text-[#2222ff] hover:underline break-all"
                  >
                    adarsh99733207@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="font-mono text-[11px] text-[#555555] bg-white border border-[#deddd7] px-2 py-0.5 rounded hover:border-[#fa0000] cursor-pointer"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* LOCATION */}
              <div className="border-l-2 border-[#deddd7] pl-3.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#777777] block">
                  Location &amp; Availability
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=New+Delhi%2C+India"
                  onClick={handleLocationClick}
                  className="font-bold text-base text-[#111111] hover:text-[#2222ff] hover:underline"
                >
                  New Delhi, India 📍
                </a>
                <span className="text-xs text-[#666666] block mt-0.5">
                  Available for Remote &amp; On-Site Positions
                </span>
              </div>

              {/* LINKEDIN */}
              <div className="border-l-2 border-[#deddd7] pl-3.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#777777] block">
                  Professional Network
                </span>
                <a
                  href="https://www.linkedin.com/in/adarsh-kumar-b52276343/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-base text-[#2222ff] hover:underline"
                >
                  linkedin.com/in/adarsh-kumar-b52276343
                </a>
              </div>
            </div>

            {/* DOMAINS */}
            <div>
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#888888] mb-3">
                What I Am Looking For
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Engineering Depth", desc: "Teams that treat architecture decisions as first-class concerns, not afterthoughts. Code reviews that discuss trade-offs, not just style." },
                  { label: "Clear Ownership", desc: "Roles with defined scope and accountability — I work better when I own a problem end-to-end than when I am handed isolated tickets." },
                  { label: "Technical Stack", desc: "Node.js, React, distributed systems, database optimization, or AI integration — these are where I can contribute immediately." },
                  { label: "Observable Systems", desc: "Production environments with structured logging, meaningful error tracking, and teams who investigate failures rather than deploying hotfixes and moving on." },
                ].map((s) => (
                  <li key={s.label} className="border-l-2 border-[#deddd7] pl-3">
                    <span className="font-bold text-[13px] text-[#111111] block">{s.label}</span>
                    <span className="text-xs text-[#555555] leading-relaxed">{s.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: MESSAGE FORM */}
          <div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#111111] mb-2">
              Send a Message
            </h2>
            <p className="text-sm text-[#555555] mb-5 leading-relaxed">
              Use the form below — it delivers directly to my inbox. Include context about the role, project, or topic you want to discuss. The more specific you are, the more useful my reply will be.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs uppercase tracking-wider font-bold text-[#555555] mb-1"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Full Name"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#deddd7] rounded-md text-base sm:text-sm text-[#222222] placeholder-[#999999] focus:outline-hidden focus:border-[#fa0000] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs uppercase tracking-wider font-bold text-[#555555] mb-1"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#deddd7] rounded-md text-base sm:text-sm text-[#222222] placeholder-[#999999] focus:outline-hidden focus:border-[#fa0000] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-wider font-bold text-[#555555] mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Project details, role description, or questions..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#deddd7] rounded-md text-base sm:text-sm text-[#222222] placeholder-[#999999] focus:outline-hidden focus:border-[#fa0000] transition-colors resize-y min-h-[100px]"
                />
              </div>

              {recaptchaSiteKey && (
                <div className="overflow-x-auto">
                  <ReCAPTCHA
                    sitekey={recaptchaSiteKey}
                    onChange={(token) => setCaptchaToken(token || '')}
                    onExpired={() => setCaptchaToken('')}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-md font-bold text-sm text-white transition-all cursor-pointer font-sans ${
                  isSubmitting
                    ? "bg-[#888888] cursor-not-allowed"
                    : "bg-[#111111] hover:bg-[#333333] active:scale-98"
                }`}
              >
                {isSubmitting ? "Sending..." : "Transmit Message →"}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 bg-[#f0fdf4] border border-[#86efac] rounded-md text-xs sm:text-sm text-[#166534] font-medium">
                  ✓ Message transmitted successfully! I will get back to you shortly.
                </div>
              )}
              {submitStatus === 'error' && submitError && (
                <div className="p-3 bg-[#fef2f2] border border-[#fca5a5] rounded-md text-xs sm:text-sm text-[#991b1b] font-medium">
                  ✗ {submitError}
                </div>
              )}
            </form>
          </div>
        </div>

      </div>

      {/* GLOBAL FOOTER WITH DESKTOP-ONLY GIANT WAVE BANNER */}
      <Footer />
    </section>
  );
};

export default Contact;