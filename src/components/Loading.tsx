import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const Loading = () => {
  const { setIsLoading } = useLoading();
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + Math.round(Math.random() * 8) + 4, 100);
      });
    }, 90);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent < 100) return;
    const timeout = setTimeout(() => setDone(true), 300);
    return () => clearTimeout(timeout);
  }, [percent]);

  useEffect(() => {
    if (!done) return;
    setHidden(true);
    // initialFX() resets the hero elements to opacity 0 and animates them
    // back in (via gsap.fromTo), so it must run as this overlay STARTS
    // fading out, not after. Firing it later left the hero fully visible
    // for hundreds of ms, then snapped it back to invisible in full view
    // right as the overlay disappeared — a jarring "shows, vanishes,
    // reappears" flash. Running it now means the reset happens while this
    // overlay still mostly covers the screen, and the reveal animation
    // plays out during the same fade instead of after it.
    import("./utils/initialFX").then((module) => {
      module.initialFX?.();
    });
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [done]);

  return (
    <div className={`loading-screen mono${hidden ? " loading-hidden" : ""}`}>
      <div className="loader-center">
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${percent}%` }} />
        </div>
        <span className="loader-percent">{percent}%</span>
      </div>
    </div>
  );
};

export default Loading;
