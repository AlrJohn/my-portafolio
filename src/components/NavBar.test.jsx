import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import NavBar from './NavBar.jsx';

describe('NavBar', () => {
  it('opens mobile navigation and exposes all routes', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <NavBar onOpenChat={vi.fn()} />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Coursework' })).toHaveLength(2);
  });
});
