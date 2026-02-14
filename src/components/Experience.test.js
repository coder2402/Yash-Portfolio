import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import React from 'react';

test('renders Experience component with images and lazy loading', () => {
  render(<Experience />);
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(9);

  images.forEach(img => {
      expect(img.getAttribute('src')).toBeTruthy();
      expect(img.getAttribute('loading')).toBe('lazy');
      expect(img.getAttribute('alt')).toBeTruthy();
  });
});
