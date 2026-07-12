import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ProjectDetail from './ProjectDetail.jsx';

describe('ProjectDetail', () => {
  it('renders a case study for a public project', () => {
    render(
      <MemoryRouter initialEntries={['/projects/veteran-claims-copilot']}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Veteran Claims Copilot' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Architecture' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /code/i })).toHaveAttribute(
      'href',
      'https://github.com/AlrJohn/veteran-claims-copilot',
    );
    expect(screen.getByRole('link', { name: /demo/i })).toHaveAttribute(
      'href',
      'https://veteran-claims-copilot.vercel.app',
    );
  });
});
