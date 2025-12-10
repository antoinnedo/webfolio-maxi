import React from 'react';
import Portrait from '../assets/images/portrait.png';
import CourseGrid from '../components/courseGrid.jsx'
import TechCarousel from '../components/techCarousel.jsx';
import { tcuLogo } from '../assets/svg/logos';
import Scramble from '../components/scramble.jsx';

const About = () => {

  return (
    <>
      <div id='about' className='relative grid grid-cols-2 gap-16 z-10 h-screen w-screen section2-container justify-center'>
        <div className='col-span-1 flex justify-center items-center'>
          <div className='absolute bg-yellow-300 w-4/12 aspect-square z-0 translate-x-24 translate-y-8'></div>
          <img src={Portrait} alt="Me" className='h-auto w-9/12 object-cover z-10'/>
        </div>
        <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold'>
          About me
        </div>
        <div className='col-span-1 flex justify-center items-center'>
          <div className='text-2xl text-left w-full max-w'>

            <Scramble text='Matcha runs in my body.' className="mb-2" />

            <Scramble text="From that, I’ve gained superpower to program." className="mb-2" />

            <Scramble text="I’m obsessed with rock climbing." className="mb-2" />

            <Scramble text='I like running, working out, chess and creating arts.' className="mb-2" />

            <Scramble text="I'm also great at programming, if I haven't mentioned." className="mb-2" />

          </div>
        </div>
      </div>
      <div className='relative z-10 min-h-screen w-screen section2-container justify-center'>
        <div className="flex flex-col items-center space-y-12 m-36">
          <div className='flex flex-col items-center space-y-12'>
            {/* Changed "School" to "Education" for a broader section title */}
            <div className='py-4 text-5xl font-bold z-10 bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat [background-position:50%_50%] [background-size:50%_100%]'>
              Education
            </div>

            <div className='grid grid-cols-7 items-center gap-4 w-full max-w-6xl'>

              {/* Logo & Location */}
              <div className='col-span-4 flex flex-col items-center'>
                <img src={tcuLogo} alt="TCU logo" className='w-112 object-contain mb-4'/>
                <div className='text-4xl font-bold text-center leading-tight text-[#501875] font-serif'>
                  Texas Christian University
                </div>
                <p className='text-xl text-gray-500 font-medium'>Fort Worth, Texas</p>
              </div>

              {/*  Name & Details */}
              <div className="col-span-3 text-left">

                <div className='text-2xl text-gray-800 leading-relaxed'>
                  <span className='text-5xl'>B.S. </span> <br/>
                  <span className='text-5xl font-bold'>Computer Science </span> <br/>
                  <span className="font-bold">GPA 3.71</span> (Dean’s List) <br/>
                  <span className="text-gray-500 text-xl">Fall 2023 - Spring 2027</span>
                </div>
              </div>

            </div>
          </div>
          <div className='flex flex-col items-center space-y-12'>
            <div className='py-4 text-5xl font-bold z-10
                            bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat
                            [background-position:100%_50%] [background-size:70%_100%]'
            >
              Courses
            </div>
            <CourseGrid />
          </div>

          <div className='flex flex-col items-center space-y-12'>
            <div className='py-4 text-5xl font-bold z-10
                            bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat
                            [background-position:20%_50%] [background-size:60%_100%]'
            >
              Tech Stacks
            </div>
            <TechCarousel />
          </div>
        </div>
        <div className='h-36'></div>
      </div>
    </>
  );
};

export default About;
