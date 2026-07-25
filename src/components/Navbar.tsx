import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialIcons from "./SocialIcons";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const NAV_ITEMS = [
  { id: "landingDiv", label: "Home" },
  { id: "about-me", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("landingDiv");

  useEffect(() => {
    const smootherInstance = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });
    smoother = smootherInstance;

    smootherInstance.scrollTop(0);
    smootherInstance.paused(true);

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".header ul a")
    );

    const handleClick = (e: MouseEvent) => {
      const elem = e.currentTarget as HTMLAnchorElement;
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const section = elem.getAttribute("data-href");
        const hash = elem.getAttribute("href");

        if (hash) {
          // Remove the # character from the string before pushing history
          const cleanPath = hash.startsWith("#") ? "/" + hash.substring(1) : hash;
          // Update the URL seamlessly without page reload
          window.history.pushState(null, "", cleanPath);
        }

        smootherInstance.scrollTo(section, true, "top 130px");
      } else {
        // On mobile, also update the URL (though we don't preventDefault, it still navigates)
        const hash = elem.getAttribute("href");
        if (hash) {
          const cleanPath = hash.startsWith("#") ? "/" + hash.substring(1) : hash;
          window.history.pushState(null, "", cleanPath);
        }
      }
      setMenuOpen(false);
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    const handleResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", handleResize);

    // Without this cleanup, React StrictMode's dev-only double-mount left a
    // second, un-killed ScrollSmoother instance fighting the real one over
    // the same content transform — the page would render, then visibly
    // snap/reset as the two competed for scroll position.
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
      window.removeEventListener("resize", handleResize);
      smootherInstance.kill();
    };
  }, []);

  useEffect(() => {
    const entries = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    entries.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="/#" className="navbar-title" data-cursor="disable">
            IA
          </a>
          <SocialIcons />
        </div>

        <button
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? "nav-open" : ""}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className={active === item.id ? "nav-active" : ""}>
              <a data-href={`#${item.id}`} href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://calendly.com/ibrarfv/30min"
          target="_blank"
          rel="noreferrer"
          className="header-cta"
          data-cursor="disable"
        >
          Book a Call
        </a>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
