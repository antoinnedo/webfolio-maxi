import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Taskbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 text-xl">
      <AppBar position='sticky' color='white' elevation={0}>
        <Toolbar sx={{ padding: '1rem' }}>
          <div className="flex justify-center items-center w-full h-16 ">

            {/* Main Navigation */}
            <div className='hidden md:flex items-center space-x-4 rounded-full px-4 py-2
                       bg-white/30 backdrop-blur-lg shadow-lg relative'>
              <a href="#about" className='py-2 px-3 hover:-translate-y-1' onClick={scrollToTop}>About</a>
              <a href="#projects" className='py-2 px-3 hover:-translate-y-1'>Projects</a>
              <a href="#experience" className='py-2 px-3 hover:-translate-y-1'>Experience</a>
              <a href="#contact" className='py-2 px-3 hover:-translate-y-1'>Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu (collapsible) */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white px-4 pb-4 space-y-1 shadow-lg">
              <a href="#about" className="block text-center bold-btn">About</a>
              <a href="#projects" className="block text-center bold-btn">Projects</a>
              <a href="#experience" className="block text-center bold-btn">Experience</a>
              <a href="#contact" className="block text-center bold-btn">Contact</a>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Taskbar;
