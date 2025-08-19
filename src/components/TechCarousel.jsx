import React from 'react';
import { styled, keyframes } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';

import {
  cLogo, cssLogo, htmlLogo, javaLogo, jsLogo,
  pythonLogo, rubyLogo, scalaLogo, tsLogo,
  angularLogo, bootstrapLogo, gsapLogo, muiLogo,
  railsLogo, reactLogo, reduxLogo, tailwindLogo,
  mysqlLogo, nodeLogo, psqlLogo, redisLogo
} from '../assets/svg/logos';

const techData = {
  languages: [
    { name: 'Ruby', logo: rubyLogo }, { name: 'JavaScript', logo: jsLogo },
    { name: 'CSS', logo: cssLogo }, { name: 'HTML', logo: htmlLogo },
    { name: 'TypeScript', logo: tsLogo }, { name: 'Java', logo: javaLogo },
    { name: 'Python', logo: pythonLogo }, { name: 'C++', logo: cLogo },
    { name: 'Scala', logo: scalaLogo },
  ],
  frameworks: [
    { name: 'Ruby on Rails', logo: railsLogo }, { name: 'React', logo: reactLogo },
    { name: 'Tailwind CSS', logo: tailwindLogo }, { name: 'Material-UI', logo: muiLogo },
    { name: 'Node.js', logo: nodeLogo }, { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'GSAP', logo: gsapLogo }, { name: 'Redux', logo: reduxLogo },
    { name: 'Angular', logo: angularLogo },
  ],
  databases: [
    { name: 'PostgreSQL', logo: psqlLogo }, { name: 'Redis', logo: redisLogo },
    { name: 'MySQL', logo: mysqlLogo },
  ],
};

const allLogos = [
  ...techData.languages,
  ...techData.frameworks,
  ...techData.databases,
];

const ITEM_WIDTH = 160;
const DURATION_PER_ITEM = 2;
const totalItems = allLogos.length;
const animationDuration = totalItems * DURATION_PER_ITEM;

const scrollLeft = keyframes`
  from {
    transform: translateX(0) translateY(-50%);
  }
  to {
    transform: translateX(calc(-${totalItems} * ${ITEM_WIDTH}px)) translateY(-50%);
  }
`;

const CarouselWrapper = styled('div')({
  width: '100%',
  maxWidth: '80vw',
  marginInline: 'auto',
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
  maskImage: `linear-gradient(to right, transparent, black 20%, black 80%, transparent)`,
});

const TechItem = styled('div', {
  shouldForwardProp: (prop) => prop !== 'index',
})(({ index }) => ({
  width: `${ITEM_WIDTH - 32}px`,
  height: `${ITEM_WIDTH}px`,
  borderRadius: '8px',
  position: 'absolute',
  top: '50%',
  left: `calc(${index} * ${ITEM_WIDTH}px)`,
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  animationName: scrollLeft,
  animationDuration: `${animationDuration}s`,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
}));

const TechCarousel = () => {
  const duplicatedLogos = [...allLogos, ...allLogos];

  return (
    <div className="absolute w-1/2 py-36">
      <CarouselWrapper>
        {duplicatedLogos.map((item, index) => (
          <Tooltip title={item.name} key={`logo-tooltip-${index}`} followCursor>
            <TechItem index={index}>
              <img
                src={item.logo}
                alt={item.name}
                className="h-20 w-20 object-contain"
              />
              <p className="text-sm font-semibold text-slate-800 text-center">
                {item.name}
              </p>
            </TechItem>
          </Tooltip>
        ))}
      </CarouselWrapper>
    </div>
  );
};

export default TechCarousel;