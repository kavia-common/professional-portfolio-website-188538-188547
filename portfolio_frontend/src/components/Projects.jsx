import React from 'react';
import projects from '../data/projects';

// PUBLIC_INTERFACE
export default function Projects() {
  /** Renders project cards from data. */
  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <article key={p.title} className="project card" aria-labelledby={`proj-${p.slug}-title`}>
          <h3 id={`proj-${p.slug}-title`}>{p.title}</h3>
          <p>{p.description}</p>
          {p.tags?.length ? (
            <div className="tags" aria-label="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          ) : null}
          <div className="project-actions">
            {p.demo && (
              <a className="btn" href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open demo for ${p.title}`}>
                Demo
              </a>
            )}
            {p.source && (
              <a className="btn ghost" href={p.source} target="_blank" rel="noopener noreferrer" aria-label={`Open source for ${p.title}`}>
                Code
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
