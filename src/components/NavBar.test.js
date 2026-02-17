import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import React from 'react';

// Mock react-scroll Link since we are testing rendering, not scrolling behavior
jest.mock('react-scroll', () => ({
  Link: (props) => <div>{props.children}</div>
}));

test('renders NavBar with all navigation links', () => {
  render(<NavBar />);

  const links = ['home', 'about', 'myWork', 'experience', 'contact'];

  links.forEach(linkText => {
    // The component renders two sets of links (desktop and mobile), but mobile is hidden initially.
    // However, getByText searches for the text content.
    // The desktop list is always in the DOM (just hidden with CSS on small screens).
    // The mobile list is conditionally rendered based on state.
    // So we should expect to find at least one of each.
    expect(screen.getAllByText(linkText).length).toBeGreaterThan(0);
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
