import { render, screen } from '@testing-library/react';
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

test('renders project links as accessible anchor tags and not nested in buttons', () => {
  render(<MyWork />);

  // Ensure links exist
  const demoLinks = screen.queryAllByRole('link', { name: 'Demo' });
  const codeLinks = screen.getAllByRole('link', { name: 'Code' });

  expect(demoLinks.length).toBeGreaterThan(0);
  expect(codeLinks.length).toBeGreaterThan(0);

  // Ensure no buttons exist with these names (which would happen if links were nested in buttons)
  const demoButtons = screen.queryAllByRole('button', { name: 'Demo' });
  const codeButtons = screen.queryAllByRole('button', { name: 'Code' });

  expect(demoButtons).toHaveLength(0);
  expect(codeButtons).toHaveLength(0);

  // Check attributes
  demoLinks.forEach(link => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noreferrer');
  });

  codeLinks.forEach(link => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noreferrer');
  });
});
