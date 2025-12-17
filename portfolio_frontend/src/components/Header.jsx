import React, { useState } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

// PUBLIC_INTERFACE
export default function Header() {
  /** Fixed top navigation with scroll spy and mobile menu. */
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(['home', 'about', 'projects', 'skills', 'resume', 'contact'], {
    rootMargin: '-64px 0px -60% 0px',
  });

  const links = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="container inner">
        <a href="#home" className="brand" aria-label="Home">Your Name</a>

        <nav aria-label="Primary" className="nav-links">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={activeId === l.id ? 'active' : undefined}>
              {l.label}
            </a>
          ))}
          <a className="btn secondary" href="/assets/resume.pdf" download aria-label="Download Resume">
            Download
          </a>
          <a className="btn" href="#contact">Contact</a>
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mobile-menu" onClick={closeMenu}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} className={activeId === l.id ? 'active' : undefined}>
              {l.label}
            </a>
          ))}
          <a href="/assets/resume.pdf" download>Download Resume</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </header>
  );
}
