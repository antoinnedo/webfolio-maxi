import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Scroller = ({ items }) => {
  const scrollerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    if (!scrollerRef.current || !contentRef.current) return;

    // We need to duplicate the content to create a seamless loop.
    // The width of the content will be doubled.
    const contentWidth = contentRef.current.offsetWidth;
    scrollerRef.current.style.width = `${contentWidth * 2}px`;
    
    // GSAP animation for infinite horizontal scroll
    gsap.to(scrollerRef.current, {
      x: -contentWidth, // Animate one full width of the content
      duration: 50, // Adjust this for speed
      ease: 'none',
      repeat: -1, // Infinite loop
    });

  }, [items]); // Rerun if the items array changes

  return (
    <div className="relative w-full overflow-hidden flex items-center">
      {/* Container for the sliding row. It needs to contain the content twice. */}
      <div ref={scrollerRef} className="flex flex-row flex-nowrap absolute left-0 top-0">
        {/* Content #1 */}
        <div ref={contentRef} className="flex flex-row flex-nowrap space-x-8 px-4">
          {items.map((logo, index) => (
            <img 
              key={`logo-1-${index}`} 
              src={logo} 
              alt={`tech logo ${index}`} 
              className="h-12 w-auto" 
            />
          ))}
        </div>
        {/* Content #2 (Duplicated for the seamless loop) */}
        <div className="flex flex-row flex-nowrap space-x-8 px-4">
          {items.map((logo, index) => (
            <img 
              key={`logo-2-${index}`} 
              src={logo} 
              alt={`tech logo ${index}`} 
              className="h-12 w-auto" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroller;