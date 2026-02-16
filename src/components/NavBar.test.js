import { render, screen } from '@testing-library/react';
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
