import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render employee table', () => {
    render(<App />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
