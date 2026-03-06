import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './Home';

test('renders Home component with correct name and titles', () => {
  render(<Home />);

  // Check for the main heading
  const nameElement = screen.getByText(/Yash Shah/i);
  expect(nameElement).not.toBeNull();

  // Check for professional titles
  expect(screen.getByText(/I'm a Competitive Programmer./i)).not.toBeNull();
  expect(screen.getByText(/I'm a Web Developer/i)).not.toBeNull();
  expect(screen.getByText(/I'm a Cse Undergrad/i)).not.toBeNull();
});

test('renders hero image with correct alt text', () => {
  render(<Home />);
  const heroImage = screen.getByAltText(/my profile/i);
  expect(heroImage).not.toBeNull();

  // Verify image source exists
  expect(heroImage.getAttribute('src')).toBeTruthy();

  // Verify performance attributes added in previous optimization
  expect(heroImage.getAttribute('fetchPriority')).toBe('high');
  expect(heroImage.getAttribute('width')).toBe('476');
  expect(heroImage.getAttribute('height')).toBe('524');
});

test('renders social profiles teaser text', () => {
  render(<Home />);
  const teaserText = screen.getByText(/Check Out My Social Profiles/i);
  expect(teaserText).not.toBeNull();
});

test('renders resume download link with correct attributes', () => {
  render(<Home />);
  const resumeLink = screen.getByRole('link', { name: /resume/i });
  expect(resumeLink).not.toBeNull();
  expect(resumeLink.getAttribute('href')).toBe('/resume.pdf');
  expect(resumeLink.getAttribute('download')).toBe('true');
});
