import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ projects = [], onImageClick, sectionRef }) => {
    const ringRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
    const ring = ringRef.current;
    const mainElement = mainRef.current;
		const triggerElement = sectionRef.current;
    if (!mainRef.current || !ringRef.current || !sectionRef || !sectionRef.current || projects.length === 0) {
			return;
		}


    const ctx = gsap.context(() => {
			const images = gsap.utils.toArray(".img", ring);
			const angle = 360 / projects.length;

			// --- SETUP ---
			// 1. Set the initial rotation and other styles
			gsap.set(ring, { rotationY: 180, cursor: 'grab' });
			gsap.set(images, {
					rotateY: (i) => i * -angle,
					transformOrigin: '50% 50% 500px',
					z: -500,
					backgroundImage: (i) => `url(${projects[i].imageUrl})`,
					backgroundSize: 'cover',
					backfaceVisibility: 'hidden'
			});

			// 2. One-time entrance animation
			gsap.from(images, {
					duration: 1.5,
					y: 200,
					opacity: 0,
					stagger: 0.1,
					ease: 'expo'
			});
        
				// --- SCROLL-DRIVEN TIMELINE ---
			gsap.timeline({
				scrollTrigger: {
					trigger: triggerElement,
					pin: mainElement,
					scrub: 1, // Using a number like 1 adds a little smoothing
					start: "top top",
					// FIX: End is now dynamic based on the number of projects
					end: `+=${projects.length * 400}`,
					// IMPROVEMENT: Added snap for a better user experience
					snap: {
						snapTo: 1 / (projects.length - 1),
						duration: 0.4,
						ease: 'power2.inOut'
					},
					markers: true,
				}
			})
			.to(ring, {
				// FIX: Rotation is now precise to end on the last image
				rotationY: 180 + (360 - angle),
				// FIX: Removed duration and overwrite, set ease to 'none' for linear scrubbing
				ease: "none"
			});

    }, mainRef);

    return () => ctx.revert();
}, [projects, sectionRef]);

    const handleImageClickInternal = (project) => {
        onImageClick && onImageClick(project);
    };

    return (
        <div ref={mainRef} className="h-screen w-full flex flex-col items-center justify-center">

        <div className='text-5xl font-bold'>
          My Projects
        </div>
            {/* The rest of your JSX remains the same */}
            <div className="w-[800px] h-[500px] left-1/2 top-1/2 [perspective:2000px]">
                <div ref={ringRef} className="relative w-full h-full [transform-style:preserve-3d]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="img absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover rounded-xl shadow-2xl [--webkit-box-reflect:below_10px_linear-gradient(transparent,transparent,rgba(0,0,0,0.25))]"
                            onClick={() => handleImageClickInternal(project)}
                            style={{ cursor: 'pointer' }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(Gallery);