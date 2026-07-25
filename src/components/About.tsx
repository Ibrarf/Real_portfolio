import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/About.css";

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: ".about-section",
      start: "top 75%",
      end: "bottom top",
      onToggle: (self) => setInView(self.isActive),
    });
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => {
      clearTimeout(refresh);
      st.kill();
    };
  }, []);

  return (
    <div className="about-section section-container" id="about-me">
      <div
        ref={contentRef}
        className={`about-card${inView ? " about-in-view" : ""}`}
      >
        <h2 className="about-title display">About</h2>

        <p className="about-para">
          Hi there! I'm Ibrahim, an AI Automation Engineer and AI Specialist
          based in Islamabad, Pakistan, with over 4 years of experience
          building intelligent systems for clients across Pakistan and
          internationally. I design scalable AI agents, voice assistants, and
          custom CRM automations, helping businesses eliminate manual work and
          scale faster through smart, modern workflows. Beyond the terminal, I
          enjoy exploring new AI research and mentoring people getting into
          automation. Let's connect and bring your workflows to life.
        </p>

        <a
          href="#experience"
          className="about-more-btn"
          data-cursor="disable"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          More...
        </a>
      </div>
    </div>
  );
};

export default About;
