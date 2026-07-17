import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursor = cursorRef.current!;
    let hover = false;
    let rafId = 0;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    const loop = () => {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        // Write the transform directly instead of spawning a GSAP tween
        // every frame — dramatically cheaper and keeps the main thread free.
        cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const hoverElements = document.querySelectorAll("[data-cursor]");
    const onMouseOver = (e: Event) => {
      const element = e.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      if (element.dataset.cursor === "icons") {
        cursor.classList.add("cursor-icons");
        cursor.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      }
      if (element.dataset.cursor === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };
    const onMouseOut = () => {
      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };
    hoverElements.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
      item.addEventListener("mouseout", onMouseOut);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      hoverElements.forEach((item) => {
        item.removeEventListener("mouseover", onMouseOver);
        item.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
