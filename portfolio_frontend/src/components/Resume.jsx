import React from 'react';

// PUBLIC_INTERFACE
export default function Resume() {
  /** Provide a download button and embed viewer for resume.pdf. */
  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="form-actions" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <span className="note">Replace the placeholder file at public/assets/resume.pdf with your actual resume.</span>
        <a className="btn" href="/assets/resume.pdf" download aria-label="Download Resume">
          Download Resume
        </a>
      </div>
      <div className="viewer" role="region" aria-label="Resume preview" style={{ marginTop: '1rem' }}>
        <object data="/assets/resume.pdf" type="application/pdf" width="100%" height="100%">
          <p>
            Unable to display the resume. You can
            {' '}
            <a href="/assets/resume.pdf" download>download it here</a>.
          </p>
        </object>
      </div>
    </div>
  );
}
