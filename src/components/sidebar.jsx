import logo from '../assets/svg/logo.svg';
import { useState } from 'react';

const SideBar = () => {
  const [spinCount, setSpinCount] = useState(0);

  const scrollToTop = () => {
    // 1. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 2. Spin the logo
    setSpinCount(prevCount => prevCount + 1);

    // 3. RESET THE LINK (Remove the #hash from URL without reload)
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  };

  return (
    <div className="w-24 fixed top-0 left-0 z-30">
        <button
            type="button"
            onClick={scrollToTop}
            className="absolute top-4 left-4 w-16 h-16 cursor-pointer group focus:outline-none"
        >
            <img
                src={logo}
                alt="Scroll to top"
                className="w-full h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `rotate(${270 + (spinCount * 360)}deg)` }}
            />
        </button>
    </div>
  );
};

export default SideBar;