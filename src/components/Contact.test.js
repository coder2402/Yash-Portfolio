import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';
import React from 'react';

test('renders Contact form with correct action from environment variable', () => {
  const originalEnv = process.env;

  // Set the environment variable for this test
  process.env = {
    ...originalEnv,
    REACT_APP_GETFORM_ENDPOINT: 'https://test-endpoint.com/f/test'
  };

  render(<Contact />);

  const form = screen.getByRole('form', { name: /contact form/i });
  expect(form).toHaveAttribute('action', 'https://test-endpoint.com/f/test');
  expect(form).toHaveAttribute('method', 'post');

  // Restore the original environment
  process.env = originalEnv;
});

test('renders all input fields with correct attributes', () => {
  render(<Contact />);

  expect(screen.getByPlaceholderText(/enter your name/i)).toBeRequired();
  expect(screen.getByPlaceholderText(/enter your email/i)).toBeRequired();
  expect(screen.getByPlaceholderText(/enter your message/i)).toBeRequired();

  expect(screen.getByLabelText(/name/i)).toHaveAttribute('autoComplete', 'name');
  expect(screen.getByLabelText(/email/i)).toHaveAttribute('autoComplete', 'email');
});
