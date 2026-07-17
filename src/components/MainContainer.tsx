import {
  lazy,
  PropsWithChildren,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Skills from "./Skills";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  // Defer the heavy 3D Tech Stack (three.js + physics) until the user is
  // about to scroll into view, so it never competes with the initial load.
  const [showTechStack, setShowTechStack] = useState<boolean>(false);
  const techStackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useEffect(() => {
    if (!isDesktopView || showTechStack) return;
    const el = techStackRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowTechStack(true);
          observer.disconnect();
        }
      },
      // Start loading ~one screen early for a seamless reveal.
      { rootMargin: "800px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isDesktopView, showTechStack]);

  return (
    <div className="container-main">
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Skills />
            <Career />
            <Work />
            {isDesktopView && (
              <div
                ref={techStackRef}
                style={{ minHeight: "80vh" }}
              >
                {showTechStack && (
                  <Suspense fallback={null}>
                    <TechStack />
                  </Suspense>
                )}
              </div>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
