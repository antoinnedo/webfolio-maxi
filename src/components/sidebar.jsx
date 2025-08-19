import logo from '../assets/svg/logo.svg';
import { useState } from 'react';

const SideBar = () => {
  const [spinCount, setSpinCount] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSpinCount(prevCount => prevCount + 1);
  };

  return (
	<div className="w-24 fixed top-0 left-0 z-30">
		<div
			onClick={scrollToTop}
			className="absolute top-4 left-4 w-16 h-16 cursor-pointer group"
		>
			<img
				src={logo}
				alt="logo"
				className="w-full h-full transition-transform duration-500 ease-in-out"
				style={{ transform: `rotate(${270 + (spinCount * 360)}deg)` }}
			/>
		</div>
	</div>
  );
};

export default SideBar;