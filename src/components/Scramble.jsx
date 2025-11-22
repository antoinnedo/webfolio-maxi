import { useState, useEffect, useRef } from 'react';

const Scramble = ({ text, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // 1. Set up the Intersection Observer to detect scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If 50% of the element is visible, trigger the effect
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered (runs only once)
        }
      },
      {
        threshold: 0.5, // 0.0 = start when 1 pixel is visible; 0.5 = halfway; 1.0 = fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. The Animation Logic (only runs when isVisible is true)
  useEffect(() => {
    if (!isVisible) {
      // Before scrolling into view, keep it scrambled (optional style choice)
      const chars = "!@#$%^&*()_+-=[]{}|;':,./<>?";
      setDisplayText(text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join(""));
      return;
    }

    const chars = "!@#$%^&*()_+-=[]{}|;':,./<>?";
    
    const startAnimation = () => {
      let iteration = 0;
      
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        // Speed controls: 0.5 is fast, 1 is very fast
        iteration += 0.8; 
      }, 30);

      // Cleanup interval if component unmounts mid-animation
      return () => clearInterval(interval);
    };

    // Wait for the specific delay, then start
    const timeout = setTimeout(() => {
      startAnimation();
    }, delay);

    return () => clearTimeout(timeout);

  }, [isVisible, text, delay]);

  return (
    <p ref={elementRef} className={`font-mono ${className}`}>
      {displayText}
    </p>
  );
};

export default Scramble;