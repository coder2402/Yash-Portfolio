import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';
import React from 'react';

test('renders SocialLinks with all links', () => {
  render(<SocialLinks />);

  const expectedHrefs = [
    'https://www.linkedin.com/in/yash-shah-ab2887202/',
    'https://github.com/coder2402',
    'mailto:dummy@gmail.com',
    'https://www.instagram.com/yash__shah____/'
  ];

  const anchors = screen.getAllByRole('link');
  // There are 4 links
  expect(anchors).toHaveLength(4);

  // Check if each expected href is present in the rendered links
  expectedHrefs.forEach(href => {
      const found = anchors.some(anchor => anchor.getAttribute('href') === href);
      expect(found).toBe(true);
  });
});
