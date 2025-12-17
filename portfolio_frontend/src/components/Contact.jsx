import React, { useState } from 'react';

function Icon({ path, label }) {
  return (
    <span aria-hidden="true" title={label}>
      <svg width="20" height="20" viewBox="0 0 24 24"><path d={path} fill="currentColor" /></svg>
    </span>
  );
}

// PUBLIC_INTERFACE
export default function Contact() {
  /** Accessible contact form with simple validation and mailto fallback. */
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const message = String(fd.get('message') || '').trim();

    if (!name || !email || !message) {
      setStatus('Please fill out all fields.');
      return;
    }
    // Basic email shape check
    if (!/.+@.+\..+/.test(email)) {
      setStatus('Please enter a valid email.');
      return;
    }
    setStatus('Thanks! Your message is ready to be sent via your email client.');
    // Build a mailto link:
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(message + `\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="grid-2">
      <form className="card" onSubmit={handleSubmit} noValidate style={{ padding: '1rem' }} aria-labelledby="contact-form-title">
        <h3 id="contact-form-title">Send a message</h3>
        <div className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input className="input" id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input className="input" id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea className="textarea" id="message" name="message" placeholder="How can I help?" required />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn">Send</button>
            <span className="note" role="status" aria-live="polite">{status}</span>
          </div>
        </div>
      </form>

      <aside className="card" style={{ padding: '1rem' }} aria-labelledby="contact-social-title">
        <h3 id="contact-social-title">Connect</h3>
        <p className="subtitle">Find me on these platforms:</p>
        <div className="socials" role="list">
          <a className="icon-btn" aria-label="GitHub" href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <Icon label="GitHub" path="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.36-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.9-1.3 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.67-4.57 4.92.36.31.68.93.68 1.88v2.79c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
          </a>
          <a className="icon-btn" aria-label="LinkedIn" href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
            <Icon label="LinkedIn" path="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.42c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.42h-3v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.96v5.7h-3v-10h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2.01 3.6 4.61v5.56z" />
          </a>
          <a className="icon-btn" aria-label="Twitter" href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <Icon label="Twitter" path="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8.09v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </a>
        </div>
      </aside>
    </div>
  );
}
