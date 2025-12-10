import React from 'react';
import GroupPhoto from '../assets/images/GroupPhoto.JPG';
import Racoon from '../assets/images/Racoon.png';
import RakunaLogo from '../assets/svg/rakunaLogo.svg';

const RakunaExperience = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-20">

        {/* Title */}
        <div className='my-24 text-5xl font-bold z-10
                  bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat
                  [background-position:80%_100%] [background-size:80%_100%]'
        >
          Experience
        </div>

        {/* Content Box */}
        <div id='RakunaIntro' className='grid grid-cols-2 gap-16 w-fit max-w-6xl mx-auto'>

          <div className='col-span-1'>
            <div className='text-6xl font-bold'>
              <div>Software</div>
              <div>Development</div>
              <div className='w-fit
                bg-gradient-to-r from-[#f06666] to-[#f06666] bg-no-repeat
                [background-position:0%_100%] [background-size:100%_17%]'
              >
                Intern
              </div>
            </div>
            {/* 3. Removed large padding-right (pr-24) so the box ends near the text */}
            <div className='text-xl pt-12 leading-relaxed'>
              My time at Rakuna was a deep dive into the <strong>full product lifecycle</strong>.
              I moved beyond academic exercises to building, shipping, and refining features used
              by real recruiters, learning invaluable lessons about user-centric design and
              robust engineering in a <strong>fast-paced startup environment</strong>.
            </div>
          </div>

          <div className='col-span-1 flex justify-center items-center'>
            <img src={RakunaLogo} alt="Rakuna Logo" />
          </div>

        </div>
      </div>
      {/* Racoon slide */}
      <div className='w-[80vw] min-h-screen mx-auto flex flex-col justify-center max-w-6xl'>

        {/* --- NEW ROW 1: Quote (Full Width) --- */}
        {/* The quote is now outside the grid, sitting on top */}
        <div className='w-full mb-16'> {/* Added margin-bottom to create space */}
          <div className='text-6xl md:text-7xl italic font-light leading-snug text-gray-600'>
            <div>‘Think big. Do small.</div>
            <div className=' bg-gradient-to-r from-[#f06666] to-[#f06666] bg-no-repeat
                            [background-position:100%_70%] [background-size:67%_20%]'>
              Move fast.’
            </div>
          </div>
        </div>

        {/* --- NEW ROW 2: Image & Content (Grid Layout) --- */}
        {/* The original 10-column grid is now nested here */}
        <div className='grid grid-cols-1 md:grid-cols-10 gap-16 w-full items-stretch'>

          {/* --- Column 1: Image (Span 4 of 10) --- */}
          <div className='flex flex-col md:col-span-4 self-end'>
            {/* Image */}
            <div className='w-full relative group'> {/* Added 'relative group' */}
              <img
                src={Racoon}
                alt="Rakuna Mascot"
                className='w-full h-auto object-cover rounded-xl shadow-xl'
              />

              {/* Overlay for hover effect */}
              <div className='absolute inset-0 bg-black bg-opacity-100 rounded-xl
                  flex items-center justify-center p-4
                  opacity-0 group-hover:opacity-70 transition-opacity duration-300'> {/* Overlay styles */}
                <p className='text-white text-center text-lg md:text-xl font-semibold leading-relaxed'>
                  Rakun in Hindu is Racoon, which is Rakuna's mascot.
                </p>
              </div>
            </div>
          </div>

          {/* --- Column 2: Roles at Work & Content (Span 6 of 10) --- */}
          <div className='flex flex-col md:col-span-6 h-full justify-end items-end'>

            {/* Header */}
            <div className='mb-6 flex self-end w-fit text-5xl font-bold z-10
                            bg-gradient-to-r from-[#f06666] to-[#f06666] bg-no-repeat
                            [background-position:80%_100%] [background-size:80%_40%]'
            >
              Roles at work
            </div>

            {/* Content */}
            <div className='text-xl space-y-6 leading-relaxed text-justify'>
              <div>
                During my time as a Software Engineer, I focused on building tools that improved both user experience
                and developer efficiency. On the <strong>front-end</strong>, I developed a resume management feature with a safety-net
                'undo' function and launched a QR code check-in system that I refined through rounds of user testing.
              </div>
              <div>
                I also tackled complex <strong>back-end</strong> challenges. I resolved a high-priority concurrency bug in our support
                chat to prevent data leakage and optimized our search algorithms to boost query accuracy by 70%.
                Beyond coding features, I improved our internal developer experience by containerizing our applications,
                which eliminated environment errors and made onboarding new teammates instant.
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* Group slide */}
      <div className="w-full min-h-screen pb-24">

        {/* --- Part 1: Full Width Photo with Fade --- */}
        {/* h-screen makes it full height.
          [mask-image:...] creates the fade to 0% transparency at the bottom 25% */}
        <div className="w-full h-screen relative mb-16">
          <img
            src={GroupPhoto}
            alt="Team Group Photo"
            className="w-full h-full object-cover
                     [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
          />
        </div>

        {/* --- Part 2: Split Columns Content --- */}
        {/* max-w-7xl keeps it aligned with standard page widths */}
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-12">

            {/* Left Column: Quote (Approx Span 2) */}
            <div className="md:w-2/12 shrink-0">
              <div className="text-center text-6xl font-bold leading-tight text-gray-900 sticky top-24">
                “Love at <br />
                <span className="text-[#f06666]">job-site</span>“
              </div>
            </div>

            {/* Skinny Box Separator */}
            {/* This is the line between columns.
              md:block hides it on mobile where columns stack. */}
            <div className="hidden md:block w-3 bg-[#f06666] shrink-0"></div>

            {/* Right Column: Text (Approx Span 8) */}
            <div className="md:w-9/12 text-xl text-gray-800 space-y-8 leading-relaxed">
              <div>
                Beyond just coding, I learned how to think from a user's perspective.
                The implementation wasn't just a technical challenge; it was about
                understanding user anxiety and preventing simple mistakes from becoming
                major frustrations.
              </div>
              <div>
                This was a deep dive into the full development lifecycle. I saw how
                crucial user feedback is in shaping a product. It's one thing to build
                something that works; it's another to build something that people find
                intuitive and helpful.
              </div>
              <div>
                Debugging third-party integrations is a unique challenge. It taught me
                the importance of meticulous documentation and how to navigate external
                APIs and their limitations to find a robust solution.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RakunaExperience;
