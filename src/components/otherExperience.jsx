import React from 'react';
import tcuLogo from '../assets/svg/tcuLogo.svg';

const otherExperience = () => {
  return (
    <div>
      <div className='justify-self-center my-24 text-5xl font-bold z-10 w-fit
                  bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat
                  [background-position:80%_100%] [background-size:80%_100%]'
      >
        Others
      </div>

      <div className='w-full justify-center py-12'>

        {/* Container: max-w-6xl, Flex Row */}
        <div className='w-full max-w-6xl mx-auto px-8 flex flex-row items-stretch gap-12'>

          {/* --- Left Column: Logo & Position --- */}
          {/* flex-1 lets it take up equal or proportional width */}
          <div className='flex-3 flex flex-col items-end'>
            {/* Logo */}
            <img src={tcuLogo} alt="TCU logo" className='w-64 h-auto mb-8' />

            {/* Position - Bold 6xl */}
            <div className='text-6xl font-bold mb-4 text-end'>
              Computer Science Tutor
            </div>

            {/* Time - 2xl */}
            <div className='text-xl text-gray-600 font-light'>
              Aug 2024 - Present
            </div>
          </div>

          {/* --- The Skinny Square/Separator --- */}
          {/* w-3 creates the skinny look. bg-[#f06666] matches your red theme. */}
          <div className='w-3 bg-[#501875] shrink-0'></div>

          {/* --- Right Column: Description --- */}
          <div className='flex-4 text-xl text-gray-800 leading-relaxed space-y-12 self-center'>
            <div>
              Broke down complex topics in Data Structures and Calculus into digestible concepts
              during 1-on-1 sessions, directly enabling over 30 students to successfully complete
              challenging assignments.
            </div>
            <div>
              Provided hands-on project guidance for Java (OOP) and Scala (Functional Programming)
              assignments, instructing students on best practices for debugging, tool selection,
              and code architecture.
            </div>
          </div>

        </div>
      </div>
      <div className='w-full flex justify-center py-12'>

        {/* Container: max-w-6xl, Flex Row */}
        <div className='w-full max-w-6xl mx-auto px-8 flex flex-row items-stretch gap-12'>

          {/* --- Left Column: Logo & Position --- */}
          {/* flex-1 lets it take up equal or proportional width */}
          <div className='flex-3 flex flex-col items-end'>
            {/* Logo */}
            <img src={tcuLogo} alt="TCU logo" className='w-64 h-auto mb-8' />

            {/* Position - Bold 6xl */}
            <div className='text-6xl font-bold mb-4 text-end'>
              Intramural Official
            </div>

            {/* Time - 2xl */}
            <div className='text-xl text-gray-600 font-light'>
              Jan 2024 - May 2024
            </div>
          </div>

          {/* --- The Skinny Square/Separator --- */}
          {/* w-3 creates the skinny look. bg-[#f06666] matches your red theme. */}
          <div className='w-3 bg-[#501875] shrink-0'></div>

          {/* --- Right Column: Description --- */}
          <div className='flex-4 text-xl text-gray-800 leading-relaxed space-y-12 self-center'>
            <div>
              Officiated high-intensity basketball, soccer, and volleyball matches, ensuring
              player safety and game integrity by consistently enforcing regulations in
              real-time.
            </div>
            <div>
              Exercised authority and conflict resolution skills to manage game flow,
              de-escalating tense situations and effectively communicating complex calls
              to captains and participants under pressure.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default otherExperience;
