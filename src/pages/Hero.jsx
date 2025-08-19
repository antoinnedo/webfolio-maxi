import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import NonButton from '../components/non-button';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const wordsRef = useRef(null);
  const cursorOneRef = useRef(null);
  const cursorTwoRef = useRef(null);
  const logoRef = useRef(null);
  const antRef = useRef(null);
  const honRef = useRef(null);
  const ydoRef = useRef(null);
  const loopingWords = ['An Artist.', 'A Viet.'];
  const finalWord = 'A Developer.';
  const logoWords = [
    'ANTHONYDO', 'NTHONYDOA', 'THONYDOAN',
    'HONYDOANT', 'ONYDOANTH', 'NYDOANTHO', 
    'YDOANTHON', 'DOANTHONY', 'OANTHONYD', 'YDO'
  ];

  useGSAP(() => {
    // Master timeline to orchestrate everything
    const masterTl = gsap.timeline();

    // Words timeline (looping and final word)
    const wordsTl = gsap.timeline();
    loopingWords.forEach((word) => {
      wordsTl
        .to(wordsRef.current, {
          duration: 1,
          text: word,
          ease: 'power2.inOut',
        })
        .to(wordsRef.current, {
          duration: 1,
          text: '',
          ease: 'power2.inOut',
        })
    });

    // Logo timeline (typing-erasing, keep YDO, no fading)
    const logoTl = gsap.timeline();
    const loopTl = gsap.timeline();

     const initialLogoHeight = logoRef.current.getBoundingClientRect().height;

    gsap.set([antRef.current, honRef.current, ydoRef.current], { text: '', opacity: 1 });

    logoWords.forEach(word => {
      loopTl
        .to(ydoRef.current, {
          duration: .2,
          text: word,
          ease: 'power2.inOut',
        })
        
    });
    
    logoTl.add(loopTl);
    // Stack HON onto YDO, then ANT onto both
    logoTl
      .to(honRef.current, {
        text: 'HON',
        duration: 0.5,
        ease: 'power2.inOut',
      }, 'stack')
      .to(antRef.current, {
        text: 'ANT',
        duration: 0.5,
        ease: 'power2.inOut',
      }, 'stack2')
      // Scale to fit screen height
      .to(logoRef.current, {
        scale: window.innerHeight / initialLogoHeight,
        duration: 1,
        ease: 'power2.inOut',
      });

    // Final word animation
    const finalWordTween = gsap.to(wordsRef.current, {
      duration: 1,
      text: finalWord,
      ease: 'power2.inOut',
      paused: true,
    });

    // Add timelines to master timeline
    masterTl
      .add(logoTl)
      .add(wordsTl)
      .call(() => {
        wordsTl.pause();
        finalWordTween.play();
      });

    // Cursor animations (independent)
    gsap.to(cursorOneRef.current, {
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1,
      duration: 0.5,
    });

    gsap.to(cursorTwoRef.current, {
      opacity: 0,
      ease: 'power2.inOut',
      repeat: -1,
      duration: 0.5,
    });

  }, { scope: '.section1-container' });

  return (
    <div className='grid grid-cols-5 h-screen w-screen relative z-10 gap-4 section1-container'>
      <div className='justify-center text-5xl flex flex-col col-span-2'>
        <div className='flex flex-col justify-center items-center'>
          <div className="text-left">Hi! I'm</div>
          <div className="text-left flex flex-nowrap">
            <div ref={wordsRef}></div>
            <div ref={cursorOneRef}>_</div>
          </div>
          <div className='pt-8 text-xl flex justify-left gap-4'>
            <NonButton text="Resume" dark />
            <NonButton text="Contact" href="#contact" />
          </div>
        </div>
      </div>
      <div className='flex flex-col col-span-3 justify-center items-center text-9xl font-bold mb-1'>
        <div className='absolute bg-purple-400 w-4/12 aspect-square z-0 translate-x-16 translate-y-16'></div>
        <div className='absolute bg-yellow-300 w-4/12 aspect-square z-10'></div>
        <div ref={logoRef} className='group flex flex-col space-y-[-1.5rem] translate-y-[1.5rem] z-20 text-center'>
          <div ref={antRef}>ANT</div>
          <div ref={honRef}>THO</div>
          <div ref={ydoRef}>YDO</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;