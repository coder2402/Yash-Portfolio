import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';
import React from 'react';

test('renders About component and checks for static content', () => {
  render(<About />);

  // Check for the main heading
  const heading = screen.getByText(/About/i);
  expect(heading).toBeInTheDocument();

  // Check for introductory text
  const introText = screen.getByText(/Inquisitive, energetic pre final year Computer Science student/i);
  expect(introText).toBeInTheDocument();

  // Check for Personal Details heading
  const personalDetailsHeading = screen.getByText(/Personal Details/i);
  expect(personalDetailsHeading).toBeInTheDocument();
});

test('renders competitive programming links correctly', () => {
  render(<About />);

  const cpLinks = [
    { site: 'Codeforces', link: 'https://codeforces.com/profile/yashshah03' },
    { site: 'Codechef', link: 'https://www.codechef.com/users/yashshah03' },
  ];

  cpLinks.forEach(({ site, link }) => {
    const linkElement = screen.getByRole('link', { name: site });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', link);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noreferrer');
  });
});

test('renders personal details list', () => {
  render(<About />);

  expect(screen.getByText(/Email:/i)).toBeInTheDocument();
  expect(screen.getByText(/yashshah2400@gmail.com/i)).toBeInTheDocument();

  expect(screen.getByText(/Birthday:/i)).toBeInTheDocument();
  expect(screen.getByText(/24th February 2003/i)).toBeInTheDocument();

  expect(screen.getByText(/Degree:/i)).toBeInTheDocument();
  expect(screen.getByText(/BTECH - Computer Science and Engineering/i)).toBeInTheDocument();

  expect(screen.getByText(/University:/i)).toBeInTheDocument();
  expect(screen.getByText(/National Institute of Technology, Surat/i)).toBeInTheDocument();
});
