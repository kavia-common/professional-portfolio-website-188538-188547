import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with quick links and copyright. */
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <p>© {year} Your Name. All rights reserved.</p>
        <nav aria-label="Footer">
          <a href="#about">About</a>{' · '}
          <a href="#projects">Projects</a>{' · '}
          <a href="#skills">Skills</a>{' · '}
          <a href="#resume">Resume</a>{' · '}
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
