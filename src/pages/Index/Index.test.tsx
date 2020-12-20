import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from './Index';

describe('Footer', () => {
  render(<Index />);

  it('render account buttons', () => {
    const login = screen.getByRole('button', {
      name: /Log in/i
    });

    const signup = screen.getByRole('button', {
      name: /Sign up/i
    });

    expect(login).toBeInTheDocument();
    expect(signup).toBeInTheDocument();
  });
});