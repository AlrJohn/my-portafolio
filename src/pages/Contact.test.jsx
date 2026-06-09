import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Contact from './Contact.jsx';

describe('Contact', () => {
  it('provides a direct email fallback when EmailJS is not configured', () => {
    render(<Contact />);

    expect(screen.getByText(/contact form is not configured/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled();
    expect(screen.getByRole('link', { name: 'Email me directly' })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:joni17111@outlook.com'),
    );
  });
});
