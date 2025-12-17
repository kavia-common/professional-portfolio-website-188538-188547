import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Expose frontend URL to index.html script for canonical/og:url if present
if (process && process.env && process.env.REACT_APP_FRONTEND_URL) {
  // eslint-disable-next-line no-undef
  window.REACT_APP_FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
