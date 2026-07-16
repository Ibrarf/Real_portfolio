import {
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" id="social">
        <a
          href="https://wa.me/923355026885"
          target="_blank"
          className="social-icon-card"
          data-brand="whatsapp"
        >
          <span className="si-bg"></span>
          <FaWhatsapp className="si-icon" />
          <span className="si-label">WhatsApp</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ibraahimarif/"
          target="_blank"
          className="social-icon-card"
          data-brand="linkedin"
        >
          <span className="si-bg"></span>
          <FaLinkedinIn className="si-icon" />
          <span className="si-label">LinkedIn</span>
        </a>
        <a
          href="mailto:ibrarfv@gmail.com"
          target="_blank"
          className="social-icon-card"
          data-brand="email"
        >
          <span className="si-bg"></span>
          <SiGmail className="si-icon" />
          <span className="si-label">Gmail</span>
        </a>
      </div>
      <a className="resume-button" href="https://drive.google.com/file/d/1Uu3KFohHXUIE9g3BY-ni3tJWGxG3MePi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
