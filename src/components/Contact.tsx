import { useRef } from "react";
import { MdArrowOutward, MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useScrollReveal } from "./utils/useScrollReveal";
import "./styles/Contact.css";

const Contact = () => {
  const splitRef = useRef<HTMLDivElement>(null);
  useScrollReveal(splitRef);

  return (
    <div className="contact-section section-container" id="contact">
      <h2 className="section-title display">Contact</h2>

      <div className="contact-split" ref={splitRef}>
        <div className="contact-left reveal">
          <p className="contact-desc">
            I'm interested in freelance and full-time opportunities. However,
            if you have other requests or questions, don't hesitate to
            contact me.
          </p>
          <p className="contact-location mono">
            📍 Islamabad, Pakistan — available for remote &amp; on-site work worldwide
          </p>
          <a
            href="https://calendly.com/ibrarfv/30min"
            target="_blank"
            rel="noreferrer"
            className="contact-call-link"
            data-cursor="disable"
          >
            Book a free strategy call
            <MdArrowOutward />
          </a>
        </div>

        <div className="contact-right reveal">
          <div className="message-box">
            <h3 className="message-box-title mono">Message me here</h3>
            <a
              href="mailto:ibrarfv@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="message-row"
              data-cursor="disable"
            >
              <MdOutlineEmail className="message-icon" />
              <span>ibrarfv@gmail.com</span>
            </a>
            <a
              href="https://wa.me/923355026885"
              target="_blank"
              rel="noreferrer"
              className="message-row"
              data-cursor="disable"
            >
              <FaWhatsapp className="message-icon" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ibraahimarif/"
              target="_blank"
              rel="noreferrer"
              className="message-row"
              data-cursor="disable"
            >
              <FaLinkedinIn className="message-icon" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ibrarf"
              target="_blank"
              rel="noreferrer"
              className="message-row"
              data-cursor="disable"
            >
              <FaGithub className="message-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
