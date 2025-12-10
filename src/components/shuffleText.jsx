import React, { useState, useEffect, useRef } from 'react';

const ShuffleText = ({
  text = "Hello World!",
  speed = 50,
  revealDelay = 100,
  duration = null,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  className = "",
  autoStart = true,
  triggerOnScroll = false,
  threshold = 0.5, // How much of the element should be visible (0.5 = 50%)
  onComplete = null,
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRefs = useRef([]);
  const elementRef = useRef(null);

  const getRandomChar = () => {
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const shuffle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Initialize with random characters for the full length
    const targetLength = text.length;
    let initialText = '';
    for (let i = 0; i < targetLength; i++) {
      initialText += text[i] === ' ' ? ' ' : getRandomChar();
    }
    setDisplayText(initialText);
    
    // Clear any existing timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current = [];

    let revealedCount = 0;
    
    // Calculate reveal delay based on duration if provided
    const actualRevealDelay = duration ? duration / targetLength : revealDelay;
    
    // Shuffle animation - only shuffle unrevealed characters
    intervalRef.current = setInterval(() => {
      let shuffled = '';
      for (let i = 0; i < targetLength; i++) {
        if (i < revealedCount) {
          shuffled += text[i];
        } else {
          shuffled += text[i] === ' ' ? ' ' : getRandomChar();
        }
      }
      setDisplayText(shuffled);
    }, speed);

    // Gradually reveal each character
    for (let i = 0; i < targetLength; i++) {
      const timeout = setTimeout(() => {
        revealedCount = i + 1;
        
        // If this is the last character, stop the animation
        if (i === targetLength - 1) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsAnimating(false);
          if (onComplete) onComplete();
        }
      }, actualRevealDelay * (i + 1));
      
      timeoutRefs.current.push(timeout);
    }
  };

  useEffect(() => {
    if (triggerOnScroll && elementRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            shuffle();
          }
        },
        {
          threshold: threshold, // Trigger when X% of element is visible
          rootMargin: '0px 0px -50px 0px', // Optional: trigger a bit before fully visible
        }
      );

      observer.observe(elementRef.current);

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    } else if (autoStart && !triggerOnScroll) {
      shuffle();
    }
    
    return () => {
      clearInterval(intervalRef.current);
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    };
  }, [text, autoStart, triggerOnScroll, threshold, hasTriggered]);

  return (
    <div ref={elementRef} className={className} {...props}>
      {displayText}
    </div>
  );
};

export default ShuffleText;