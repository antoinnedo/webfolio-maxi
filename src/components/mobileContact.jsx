import React, { useState } from 'react';
import gmail from '../assets/images/gmail.png';
import iphone from '../assets/images/iphone.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/svg/github.svg';
import resume from '../assets/svg/resume.svg';
import portfolioIcon from '../assets/svg/icon.svg';

const contactLinks = [
  {
    href: '/resume.pdf',
    icon: resume,
    label: 'Resume',
  },
  {
    href: 'https://www.linkedin.com/in/anthonydo2307/',
    icon: linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/antoinnedo/',
    icon: github,
    label: 'GitHub',
  },
  {
    href: 'mailto:anthonydo2307@gmail.com',
    icon: gmail,
    label: 'Email',
  },
  {
    href: 'tel:+16823061796',
    icon: iphone,
    label: 'Phone',
  },
];

const MobileContact = () => {
  const [showDesktopNotice, setShowDesktopNotice] = useState(true);

  return (
    <div className="mobile-contact">
      <main className="mobile-contact-card">
        <img
          className="mobile-contact-logo"
          src={portfolioIcon}
          alt="Anthony Do portfolio"
        />
        <p className="mobile-contact-eyebrow">Portfolio</p>
        <h1>Anthony Do</h1>
        <p className="mobile-contact-subtitle">
          Senior Computer Science student at Texas Christian University.
        </p>

        <div className="mobile-contact-divider" />

        <h2>Contact at</h2>
        <div className="mobile-contact-links">
          {contactLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <img src={icon} alt="" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </main>

      {showDesktopNotice && (
        <div className="mobile-desktop-modal-backdrop">
          <section
            className="mobile-desktop-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="desktop-notice-title"
          >
            <p className="mobile-contact-eyebrow">A quick note</p>
            <h2 id="desktop-notice-title">The full experience needs a bigger screen.</h2>
            <p>
              This portfolio was designed for a desktop or laptop. You can still find my
              contact information here on mobile.
            </p>
            <button type="button" onClick={() => setShowDesktopNotice(false)}>
              View mobile contact
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default MobileContact;
