import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation and sections', () => {
  render(<App />);

  // Header brand
  expect(screen.getByRole('banner')).toBeInTheDocument();

  // Section headings
  expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /resume/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();

  // Resume download link exists
  const downloadLinks = screen.getAllByRole('link', { name: /download resume|download/i });
  expect(downloadLinks.length).toBeGreaterThan(0);
});
