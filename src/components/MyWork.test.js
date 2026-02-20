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

test('renders Demo and Code links correctly', () => {
  render(<MyWork />);

  // Verify links exist and have correct attributes
  // Note: accessible name matches aria-label "Demo for ..."
  const demoLinks = screen.getAllByRole('link', { name: /Demo/i });
  const codeLinks = screen.getAllByRole('link', { name: /Code/i });

  expect(demoLinks.length).toBeGreaterThan(0);
  expect(codeLinks.length).toBeGreaterThan(0);

  demoLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer noopener');
  });

  codeLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer noopener');
  });

  // Verify they are NOT buttons
  const demoButtons = screen.queryAllByRole('button', { name: /Demo/i });
  expect(demoButtons).toHaveLength(0);

  const codeButtons = screen.queryAllByRole('button', { name: /Code/i });
  expect(codeButtons).toHaveLength(0);
});
