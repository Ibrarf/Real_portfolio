import { useEffect, useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialIcons from "./SocialIcons";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { initialFX } from "./utils/initialFX";
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

const SECTION_IDS = new Set(NAV_ITEMS.map((item) => item.id));

function initialSectionFromUrl() {
  const requestedId = window.location.pathname.replace(/^\//, "");
  return SECTION_IDS.has(requestedId) ? requestedId : "landingDiv";
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(initialSectionFromUrl);

  useLayoutEffect(() => {
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
    document.body.style.overflowY = "auto";

    // Land on whatever section the URL points to (e.g. a reload on
    // /about-me) instead of always resetting to home. This runs in a layout
    // effect — before the browser paints this component's first frame — and
    // jumps instantly (no smooth animation), so there's nothing to "flash":
    // the page is already positioned correctly by the time it's visible.
    const targetId = initialSectionFromUrl();
    const isHome = targetId === "landingDiv";
    let resnapHandler: (() => void) | null = null;

    if (isHome) {
      smootherInstance.scrollTop(0);
    } else {
      // .scrollTo(target, false, position) — the instant-jump form — landed
      // thousands of pixels short for sections deep in the page (seemingly a
      // real limitation of ScrollSmoother's instant path with a "speed"
      // multiplier configured). .offset() + scrollTop() computes the same
      // position through the numeric API instead, which doesn't have that
      // problem.
      smootherInstance.scrollTop(smootherInstance.offset(`#${targetId}`, "top 130px"));

      // ScrollSmoother measures total page height synchronously right here,
      // before images (project thumbnails, etc.) have loaded — so for a
      // section positioned after them, that first jump can land short of
      // the real target. Once everything has actually loaded, refresh the
      // measurement and jump again (still instant) to correct any drift.
      resnapHandler = () => {
        ScrollSmoother.refresh(true);
        smootherInstance.scrollTop(smootherInstance.offset(`#${targetId}`, "top 130px"));
      };
      if (document.readyState === "complete") {
        resnapHandler();
      } else {
        window.addEventListener("load", resnapHandler, { once: true });
      }
    }

    initialFX(isHome);

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
      if (resnapHandler) window.removeEventListener("load", resnapHandler);
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

  // Keep the URL in sync with whatever section is actually in view, not just
  // the last one a nav link was clicked for. Without this, scrolling past
  // Projects by hand (no click) left the URL on "/work" from an earlier
  // click, so a reload always snapped back to Projects regardless of where
  // the user had actually scrolled to. replaceState (not pushState) avoids
  // spamming browser history on every scroll-driven section change.
  useEffect(() => {
    const cleanPath = `/${active}`;
    if (window.location.pathname !== cleanPath) {
      window.history.replaceState(null, "", cleanPath);
    }
  }, [active]);

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
