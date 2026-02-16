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
