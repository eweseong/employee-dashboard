import React from 'react';
import { render, screen } from '@testing-library/react';
import EmployeeTally from './EmployeeTally';

describe('EmployeeTally', () => {
  it('should render 0 tally when no tally is empty', () => {
    render(<EmployeeTally />);
    expect(screen.getByText(0)).toBeInTheDocument();
  });

  it('should render given tally when tally is provided', () => {
    render(<EmployeeTally tally={100} />);
    expect(screen.getByText(100)).toBeInTheDocument();
  });
});
