import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from './Experience.jsx';

describe('Experience', () => {
  it('renders grouped experience sections and the publication link', () => {
    render(<Experience />);

    expect(screen.getByRole('heading', { name: 'Professional Experience' })).toBeInTheDocument();
    expect(screen.getByText(/AI Innovation Fellow/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Research & Publications' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /IEEE Xplore/i })).toHaveAttribute(
      'href',
      'https://ieeexplore.ieee.org/document/11413961',
    );
    expect(screen.getByRole('heading', { name: 'Leadership & Service' })).toBeInTheDocument();
  });
});
