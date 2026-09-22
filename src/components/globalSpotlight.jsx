import React, { useEffect, useRef, useState } from "react";

const GlobalSpotlight = () => {
  const cursorRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
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

      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <img
          src="/mouse.png"
          alt=""
          aria-hidden="true"
          className={`
            absolute top-0 left-0
            transition-transform duration-200 z-[9998]
            ${isClicked ? "scale-75" : "scale-100"}
          `}
          style={{
            width: "2.25rem",
            height: "auto",
            maxWidth: "none",
            filter: `
              drop-shadow(2px 0 0 white)
              drop-shadow(-2px 0 0 white)
              drop-shadow(0 2px 0 white)
              drop-shadow(0 -2px 0 white)
            `,
          }}
        />
      </div>
    </>
  );
};

export default GlobalSpotlight;
