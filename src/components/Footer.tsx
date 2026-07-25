import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo mono">IA</span>
            <span className="footer-email">ibrarfv@gmail.com</span>
          </div>
          <p className="footer-tagline">
            AI Automation Engineer &amp; AI Specialist — Islamabad, Pakistan
          </p>
        </div>

        <div className="footer-media">
          <span className="footer-media-label mono">Media</span>
          <div className="footer-icons">
            <a href="https://wa.me/923355026885" target="_blank" rel="noreferrer" data-cursor="disable">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/ibraahimarif/" target="_blank" rel="noreferrer" data-cursor="disable">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/ibrarf" target="_blank" rel="noreferrer" data-cursor="disable">
              <FaGithub />
            </a>
            <a href="mailto:ibrarfv@gmail.com" target="_blank" rel="noreferrer" data-cursor="disable">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copyright mono">
        © {new Date().getFullYear()} Ibrahim Arif. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
