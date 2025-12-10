import React from 'react';
import gmail from '../assets/images/gmail.png';
import iphone from '../assets/images/iphone.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/svg/github.svg';

const ContactIcon = ({ href, icon, label, alt, reverse = false }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex items-center
        transition-all duration-500 ease-in-out
        ${reverse ? 'flex-row-reverse' : 'flex-row'} 
      `}
    >
      {/* The Icon - Fixed Height */}
      <img
        src={icon}
        alt={alt}
        className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
      />

      {/* The Text Drawer */}
      <div className="
        overflow-hidden max-w-0 opacity-0
        /* On Hover: Expand width and fade in */
        group-hover:max-w-[400px] group-hover:opacity-100
        transition-all duration-500 ease-in-out
      ">
        {/* pl-4 adds space between icon and text.
           whitespace-nowrap ensures text doesn't jump lines while expanding.
        */}
        <span className={`
          text-2xl font-bold text-slate-800 whitespace-nowrap
          ${reverse ? 'pr-16' : 'pl-16'}
        `}>
          {label}
        </span>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <div id="contact" className='h-screen w-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-20 w-full'>

        {/* Heading */}
        <div>
          <div className='text-center text-5xl font-bold z-10
                          bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat
                          [background-position:100%_90%] [background-size:50%_35%]'
          >
            Like my work? <br/>
            Let’s talk business.
          </div>
        </div>

        {/* Horizontal Row - Flexbox handles the "Push" effect automatically */}
        <div className='flex flex-row items-center gap-24 md:gap-16 h-32 justify-center'>

          <ContactIcon
            href="https://www.linkedin.com/in/anthonydo2307/"
            icon={linkedin}
            label="/anthonydo2307"
            alt="linkedin"
          />

          <ContactIcon
            href="https://github.com/antoinnedo/"
            icon={github}
            label="/antoinnedo"
            alt="github"
          />

          <ContactIcon
            href="mailto:anthonydo2307@gmail.com"
            icon={gmail}
            label="anthonydo2307@gmail.com"
            alt="gmail"
            reverse={true}
          />

          <ContactIcon
            href="tel:+16823061796"
            icon={iphone}
            label="(682) 306 1796"
            alt="phone"
            reverse={true}
          />

        </div>
      </div>
    </div>
  );
};

export default Contact;

// import gmail from '../assets/images/gmail.png'; // or .svg
// import iphone from '../assets/images/iphone.png';
// import linkedin from '../assets/images/linkedin.png';
// import github from '../assets/svg/github.svg'

// const Contact = () => {
//   return (
//     <div id="contact" className='flex justify-center items-center h-screen w-full'>
//       <div className='flex flex-col justify-center items-center gap-12'>
//         <div>
//           <div className='flex text-center my-12 text-5xl font-bold z-10
//                               bg-gradient-to-r from-yellow-300 to-yellow-300 bg-no-repeat
//                               [background-position:100%_90%] [background-size:50%_35%]'
//           >
//             Like my work? <br/>
//             Let’s talk business.
//           </div>
//         </div>
//         <div className='grid grid-cols-4 h-auto w-1/2 gap-24'>
//           <a href="https://www.linkedin.com/in/anthonydo2307/" className='flex justify-center items-center'>
//             <img src={linkedin} alt="linkedin logo" className='h-3/4'/>
//           </a>
//           <a href="https://github.com/antoinnedo/" className='flex justify-center items-center'>
//             <img src={github} alt="github logo" className=''/>
//           </a>
//           <a href="mailto:anthonydo2307@gmail.com">
//             <img src={gmail} alt="gmail logo" />
//           </a>
//           <a href="tel:+16823061796" className='-translate-x-1/4'>
//             <img src={iphone} alt="iphone icon" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
