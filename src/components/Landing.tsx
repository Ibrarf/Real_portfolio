import "./styles/Landing.css";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TbNotes } from "react-icons/tb";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="hero-watermark hero-watermark-1" aria-hidden="true">
        <span>{Array(6).fill("AI AUTOMATION ENGINEER").join(" • ")}</span>
      </div>
      <div className="hero-watermark hero-watermark-2" aria-hidden="true">
        <span>{Array(6).fill("AI SPECIALIST • CRM AUTOMATION").join(" • ")}</span>
      </div>

      <div className="hero-center">
        <span className="hero-eyebrow">Hello There, I&apos;m</span>
        <h1 className="hero-name display">Ibrahim Arif</h1>
        <p className="hero-tagline">
          AI Automation Engineer &amp; AI Specialist
        </p>
        <p className="hero-location">Based in Islamabad, Pakistan — available worldwide</p>

        <div className="hero-socials">
          <a
            href="https://wa.me/923355026885"
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            data-cursor="disable"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/ibraahimarif/"
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            data-cursor="disable"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/ibrarf"
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            data-cursor="disable"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:ibrarfv@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            data-cursor="disable"
            aria-label="Email"
          >
            <SiGmail />
          </a>
          <a
            href="https://drive.google.com/file/d/1Uu3KFohHXUIE9g3BY-ni3tJWGxG3MePi/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hero-social-icon"
            data-cursor="disable"
            aria-label="Resume"
          >
            <TbNotes />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
