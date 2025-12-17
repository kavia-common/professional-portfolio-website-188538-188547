import React from 'react';

// PUBLIC_INTERFACE
export default function About() {
  /** Short bio/about section content. */
  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid-2">
        <div>
          <p>
            I’m a frontend engineer focused on building accessible, fast, and delightful user experiences.
            I enjoy turning complex problems into simple, beautiful interfaces and collaborate closely with
            design and backend teams.
          </p>
          <p className="subtitle" style={{ marginTop: '.75rem' }}>
            Outside of work, I explore UI animations, performance tuning, and teach web fundamentals.
          </p>
        </div>
        <div>
          <ul>
            <li><strong>Location:</strong> Remote / City, Country</li>
            <li><strong>Experience:</strong> 5+ years</li>
            <li><strong>Interests:</strong> Accessibility, DX, Tooling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
