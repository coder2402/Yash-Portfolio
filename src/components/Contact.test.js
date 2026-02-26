import { render, screen } from '@testing-library/react';
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
  expect(form.getAttribute('action')).toBe('https://test-endpoint.com/f/test');
  expect(form.getAttribute('method')).toBe('post');

  // Restore the original environment
  process.env = originalEnv;
});

test('renders all input fields with correct attributes and constraints', () => {
  render(<Contact />);

  const nameInput = screen.getByPlaceholderText(/enter your name/i);
  const emailInput = screen.getByPlaceholderText(/enter your email/i);
  const messageInput = screen.getByPlaceholderText(/enter your message/i);

  // Verify required attributes
  expect(nameInput.required).toBe(true);
  expect(emailInput.required).toBe(true);
  expect(messageInput.required).toBe(true);

  // Verify autoComplete attributes
  expect(nameInput.getAttribute('autoComplete')).toBe('name');
  expect(emailInput.getAttribute('autoComplete')).toBe('email');

  // Verify maxLength attributes
  expect(nameInput.getAttribute('maxLength')).toBe('50');
  expect(emailInput.getAttribute('maxLength')).toBe('100');
  expect(messageInput.getAttribute('maxLength')).toBe('500');
});
