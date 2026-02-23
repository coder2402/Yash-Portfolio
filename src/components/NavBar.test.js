import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import React from 'react';

test('renders NavBar with all navigation links', () => {
  render(<NavBar />);

  const links = ['home', 'about', 'myWork', 'experience', 'contact'];

  links.forEach(linkText => {
    // The component renders two sets of links (desktop and mobile), but mobile is hidden initially.
    // We check for accessible links.
    const linkElements = screen.getAllByRole('link', { name: linkText });
    expect(linkElements.length).toBeGreaterThan(0);

    // Verify the href attribute
    expect(linkElements[0]).toHaveAttribute('href', `#${linkText}`);
  });
});

test('renders mobile menu toggle button with accessible attributes', () => {
  render(<NavBar />);

  // Initial state: Menu closed
  const toggleButton = screen.getByRole('button', { name: /open menu/i });
  expect(toggleButton).toBeInTheDocument();
  expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

  // Click to open menu
  fireEvent.click(toggleButton);

  // State: Menu open
  expect(toggleButton).toHaveAttribute('aria-label', 'Close menu');
  expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

  // Click to close menu
  fireEvent.click(toggleButton);

  // State: Menu closed
  expect(toggleButton).toHaveAttribute('aria-label', 'Open menu');
  expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
});
