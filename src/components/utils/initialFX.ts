import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  gsap.to("body", {
    backgroundColor: "#0d0d10",
    duration: 0.5,
    delay: 1,
  });

  // NOTE: We intentionally do NOT auto-scroll to a deep-linked section on
  // load. The hero's scroll choreography fades the landing text as you move
  // down, and doing that during the initial load left the hero blank on
  // /about, /contact, etc. The URL is normalized to "/" in main.tsx so every
  // entry point behaves like the (working) homepage.

  gsap.fromTo(
    [".hero-eyebrow", ".hero-name", ".hero-tagline"],
    { opacity: 0, y: 30, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.08,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".hero-socials",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    ".hero-watermark",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      delay: 0.2,
    }
  );

  gsap.fromTo(
    [".header", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
