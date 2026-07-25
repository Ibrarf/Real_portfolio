import gsap from "gsap";

/**
 * Runs the entrance animation once ScrollSmoother is set up and the page is
 * positioned at the right section. The hero-specific animation only plays
 * when landing on home — if a reload restored the user to, say, #experience,
 * there's no reason to animate hero text that isn't even in view (and
 * skipping it just leaves those elements at their normal opacity, so
 * scrolling back up to the hero later looks fine either way).
 */
export function initialFX(isHome: boolean) {
  if (isHome) {
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
  }

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
