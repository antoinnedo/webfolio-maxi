import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a.withConfig({
  shouldForwardProp: (prop) => !['dark', 'white', 'fast', 'reverse'].includes(prop),
})`
  --background: ${(props) => (props.dark ? '#4d1979' : 'rgba(255, 255, 255, 0.3)')};
  --text: ${(props) => (props.dark ? '#FFFFFF' : '#000000')};
  --font-size: 1.25rem;
  --duration: ${(props) => (props.fast ? '0.32s' : '0.44s')};
  --move-hover: -4px;
  --font-shadow: ${(props) => (props.reverse ? 'calc(var(--font-size) * -1)' : 'var(--font-size)')};

  padding: 16px 32px;
  font-family: 'Helvetica';
  font-weight: 500;
  line-height: var(--font-size);
  border-radius: 24px;
  display: block;
  outline: none;
  appearance: none;
  border: none;
  text-decoration: none;
  font-size: var(--font-size);
  letter-spacing: 0.5px;
  background: var(--background);
  color: var(--text);
  backdrop-filter: blur(10px);
  transform: translateY(var(--y, 0)) translateZ(0);
  transition: transform var(--duration) ease, box-shadow var(--duration) ease;
  cursor: pointer;

  div {
    display: flex;
    overflow: hidden;
    text-shadow: 0 var(--font-shadow) 0 var(--text);
  }

  span {
    display: block;
    backface-visibility: hidden;
    font-style: normal;
    transition: transform var(--duration) ease;
    transform: translateY(var(--m, 0)) translateZ(0);

    ${Array.from({ length: 11 }, (_, i) => `
      &:nth-child(${i + 1}) {
        transition-delay: ${(i + 1) / 20}s;
      }
    `).join('')}
  }

  &:hover {
    --y: var(--move-hover);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    span {
      --m: ${(props) => (props.reverse ? 'calc(var(--font-size))' : 'calc(var(--font-size) * -1)')};
    }
  }

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
  }
`;

const NonButton = ({ text, href, dark, white, fast, reverse, target, onClick }) => {
  return (
    <StyledLink 
      href={href} 
      dark={dark} 
      white={white} 
      fast={fast} 
      reverse={reverse}
      target={target}
      onClick={onClick}
    >
      <div>
        {text.split('').map((char, index) => (
          <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </div>
    </StyledLink>
  );
};

export default NonButton;