# Personal Portfolio (React)

A responsive single-page portfolio built with React and vanilla CSS. Features a fixed top navigation, smooth scrolling, Projects, Skills, Resume (downloadable), and Contact sections with accessibility in mind.

## Getting Started

- Install dependencies:
  npm install

- Start the dev server:
  npm start

- Run tests:
  npm test

- Build for production:
  npm run build

## Structure

- public/index.html: SEO meta, theme-color, canonical/og handled at runtime
- public/assets/resume.pdf: Replace this placeholder with your actual PDF
- src/components: Header, About, Projects, Skills, Resume, Contact, Footer
- src/hooks/useScrollSpy.js: Scroll spy for active navigation highlighting
- src/data/projects.js: Data source for Projects section

## Theming

The app follows a light theme with:
- Primary: #3b82f6
- Success: #06b6d4
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

## Environment Variables

- REACT_APP_FRONTEND_URL (optional): If set, it will be used as the canonical and og:url via a small inline script in index.html. The script falls back to window.location.

Note: Ask the operator to set env variables in the .env file (do not hardcode secrets in code).

## Accessibility

- Skip-to-content link
- Labeled form controls
- Focus outlines using :focus-visible
- ARIA attributes for mobile menu and icons

## Replace Resume

Replace public/assets/resume.pdf with your actual resume file, keeping the same name, to enable the download button and embedded preview.

## No External Services

The contact form uses a mailto: link fallback and does not post to any external service.

## License

MIT
