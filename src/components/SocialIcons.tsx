import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://wa.me/923355026885"
        target="_blank"
        rel="noreferrer"
        className="social-icon-card"
        data-brand="whatsapp"
        data-cursor="disable"
      >
        <FaWhatsapp className="si-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/ibraahimarif/"
        target="_blank"
        rel="noreferrer"
        className="social-icon-card"
        data-brand="linkedin"
        data-cursor="disable"
      >
        <FaLinkedinIn className="si-icon" />
      </a>
      <a
        href="https://github.com/ibrarf"
        target="_blank"
        rel="noreferrer"
        className="social-icon-card"
        data-brand="github"
        data-cursor="disable"
      >
        <FaGithub className="si-icon" />
      </a>
      <a
        href="mailto:ibrarfv@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="social-icon-card"
        data-brand="email"
        data-cursor="disable"
      >
        <SiGmail className="si-icon" />
      </a>
      <a
        className="social-icon-card resume-link"
        href="https://drive.google.com/file/d/1Uu3KFohHXUIE9g3BY-ni3tJWGxG3MePi/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        <TbNotes className="si-icon" />
      </a>
    </div>
  );
};

export default SocialIcons;
