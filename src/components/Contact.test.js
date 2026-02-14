import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('Contact Component Accessibility and UX', () => {
  test('inputs should have required attribute', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/Enter your name/i);
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const messageInput = screen.getByPlaceholderText(/Enter your message/i);

    expect(nameInput).toBeRequired();
    expect(emailInput).toBeRequired();
    expect(messageInput).toBeRequired();
  });

  test('inputs should have accessible names matching placeholders', () => {
    render(<Contact />);
    // Check if we can find elements by their accessible name (aria-label)
    // The name option in getByRole matches aria-label, aria-labelledby, or label text
    expect(screen.getByRole('textbox', { name: /Enter your name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Enter your email/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /Enter your message/i })).toBeInTheDocument();
  });

  test('inputs should have visual focus feedback class', () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/Enter your name/i);

    // Check for the class that provides visual feedback
    expect(nameInput).toHaveClass('focus:border-cyan-500');
    expect(nameInput).toHaveClass('duration-300');
  });
});
