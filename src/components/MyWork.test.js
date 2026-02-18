import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyWork from './MyWork';
import React from 'react';

test('renders MyWork component with images and lazy loading', () => {
  render(<MyWork />);
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(4);

  images.forEach(img => {
      expect(img.getAttribute('src')).toBeTruthy();
      expect(img.getAttribute('loading')).toBe('lazy');
      expect(img.getAttribute('alt')).toBeTruthy();
  });
});

test('renders demo and code links with accessible attributes', () => {
  render(<MyWork />);

  // Check for accessible links
  const links = screen.getAllByRole('link');
  // Item 1 (Portfolio): codeLink, demoLink. (2 links)
  // Item 2 (Dice Game): codeLink, demoLink. (2 links)
  // Item 3 (Notes): codeLink, demoLink. (2 links)
  // Item 4 (Safar): codeLink only. (1 link)
  // Total: 7 links.

  expect(links.length).toBe(7);

  links.forEach(link => {
    expect(link).toHaveAttribute('href');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveAttribute('aria-label');
  });

  // Ensure no button elements exist (confirming removal of invalid wrapper)
  const buttons = screen.queryByRole('button');
  expect(buttons).toBeNull();
});
