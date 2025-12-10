import React, { useEffect, useRef, useState } from "react";

const GlobalSpotlight = () => {
  const cursorRef = useRef(null); // The precision dot (instant)
  const glowRef = useRef(null);   // The soft glow (drags behind)
  const [isClicked, setIsClicked] = useState(false);

  // Store coordinates in refs to avoid re-renders on every mouse move
  const mousePos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // 1. Update target mouse position
      mousePos.current = { x: e.clientX, y: e.clientY };

      // 2. Move the Precision Dot INSTANTLY
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Animation Loop for the Dragging Glow
    let animationFrameId;
    
    const animateGlow = () => {
      // LERP (Linear Interpolation) Logic
      // Formula: current = current + (target - current) * speed
      const speed = 0.125; // Lower = more lag/drag, Higher = tighter follow

      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * speed;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * speed;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateGlow);
    };

    // Start Listeners and Loop
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    animateGlow();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        html, body, a, button, input, select, textarea, [role="button"] {
          cursor: none !important;
        }
        
        /* CUSTOM TEXT SELECTION COLOR */
        ::selection {
          background-color: rgba(77, 25, 121, 0.5);
          color: white;
        }
      `}</style>

      {/* --- LAYER 1: The Dragging Glow --- */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 mix-blend-screen"
      >
        <div
          // Tailwind Classes:
          // transition-all duration-300: Smooths the shrinking/exploding
          // ease-out-back: Custom cubic-bezier feel (defined in style below)
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-full bg-yellow-300 blur-2xl z-[-1]
            transition-all duration-500
            ${isClicked ? "scale-50 opacity-80" : "scale-100 opacity-80"}
          `}
          style={{
            width: "5rem",  // Large size for the glow
            height: "5rem",
            // This Bezier curve creates the "Explode" pop effect on release
            transitionTimingFunction: isClicked 
                ? "ease-out" 
                : "cubic-bezier(0.34, 1.56, 0.64, 1)" 
          }}
        />
      </div>

      {/* --- LAYER 2: The Precision Dot --- */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-black border border-white border-[.25rem] rounded-full
            transition-all duration-200  z-[9998]
            ${isClicked ? "scale-75" : "scale-100"}
          `}
          style={{
            width: "1rem",
            height: "1rem",
          }}
        />
      </div>
    </>
  );
};

export default GlobalSpotlight;