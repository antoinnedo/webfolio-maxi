import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ScrollArrow = () => {
  const containerRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const arrow = arrowRef.current;

    if (!container || !arrow) return;

    // Set initial position - 5rem from bottom
    gsap.set(container, {
      position: 'fixed',
      bottom: '5rem',
      left: '50%',
      xPercent: -50,
      zIndex: 1000
    });

    // Create the circular motion timeline
    const tl = gsap.timeline({ repeat: -1, ease: "none" });
    
    // Animate the arrow in a circular path without rotation
    tl.to(arrow, {
      duration: 4,
      motionPath: {
        path: "M0,0 C0,-30 30,-30 30,0 C30,30 0,30 0,0 z",
        autoRotate: false,
        alignOrigin: [0.5, 0.5]
      }
    });

    // Add floating animation to the container
    gsap.to(container, {
      y: "+=10",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });

    // Add subtle scale pulse
    gsap.to(container, {
      scale: 1.05,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className='hidden md:flex items-center justify-center rounded-full px-4 py-2 bg-white/30 backdrop-blur-lg shadow-lg relative'
      style={{ width: '80px', height: '80px' }}
    >
      <div ref={arrowRef} className="text-black">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
      
      {/* Subtle backdrop effect */}
      <div className="absolute inset-0 rounded-full bg-white/10"></div>
    </div>
  );
};

export default ScrollArrow;