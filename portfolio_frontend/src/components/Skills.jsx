import React from 'react';

// PUBLIC_INTERFACE
export default function Skills() {
  /** Skills grouped into categories with badges. */
  const groups = [
    { title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Redux', 'Vite', 'CSS Modules', 'Tailwind CSS'] },
    { title: 'Testing', items: ['Jest', 'React Testing Library', 'Playwright'] },
    { title: 'Tooling', items: ['Webpack', 'ESBuild', 'ESLint', 'Prettier', 'GitHub Actions'] },
  ];

  return (
    <div className="skills-groups">
      {groups.map((g) => (
        <section key={g.title} className="skill-card card" aria-labelledby={`skill-${g.title}`}>
          <h3 id={`skill-${g.title}`}>{g.title}</h3>
          <ul className="skill-list">
            {g.items.map((item) => (
              <li key={item} className="skill-badge">{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
