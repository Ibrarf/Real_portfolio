import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/About.css";

const stack = ["N8N", "GoHighLevel", "Make.com", "LangChain", "Python", "SQL"];

const highlights = [
  { num: "4", label: "Years\nExperience" },
  { num: "AI", label: "Agents &\nVoice Bots" },
  { num: "CRM", label: "Automation\nSystems" },
];

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Reveal the About content with a ScrollTrigger tied to the section. This
    // is integrated with the smooth-scroller, so it fires correctly whether
    // the user scrolls manually OR jumps here via the nav (which raw scroll
    // listeners miss). It stays hidden while the hero is on screen — the About
    // column is transformed up into the hero, so revealing early bleeds over
    // the 3D character — and reveals as soon as the section enters view.
    const st = ScrollTrigger.create({
      trigger: ".about-section",
      start: "top 65%",
      end: "bottom top",
      onToggle: (self) => setInView(self.isActive),
    });
    // Recalculate once everything (fonts, 3D, lazy sections) has settled.
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(refresh);
      st.kill();
    };
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div
          ref={contentRef}
          className={`about-content${inView ? " about-in-view" : ""}`}
        >
          <div className="about-badge">
            <span className="about-badge-dot"></span>
            Available for freelance &amp; full-time
          </div>

          <h3 className="title about-title">About Me</h3>
          <span className="about-title-line"></span>

          <p className="para about-intro">
            I'm an AI Automation Engineer and AI Specialist with over 4 years of
            experience building intelligent systems for international clients.
          </p>
          <p className="para about-detail">
            I design scalable AI agents, voice assistants, and end-to-end CRM
            automations — helping businesses eliminate manual work and scale
            faster through smart, modern workflows.
          </p>

          <div className="about-stats">
            {highlights.map((h) => (
              <div className="about-stat" key={h.num}>
                <span className="about-stat-num">{h.num}</span>
                <span className="about-stat-label">
                  {h.label.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          <div className="about-stack">
            {stack.map((tech) => (
              <span className="about-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <a
            href="#what"
            className="about-next-link"
            data-cursor="disable"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#what");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore What I Do
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
