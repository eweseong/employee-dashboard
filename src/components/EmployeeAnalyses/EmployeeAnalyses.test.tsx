import { render, screen } from '@testing-library/react';
import React from 'react';
import EmployeeAnalyses from './EmployeeAnalyses';

describe('EmployeeAnalyses', () => {
  it('should render all analysis provided', () => {
    render(
      <EmployeeAnalyses
        analyses={{
          analysis1: 'value1',
          analysis2: 'value2',
        }}
      />
    );
    expect(screen.getByText('analysis1', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('value1', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('analysis2', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('value2', { exact: false })).toBeInTheDocument();
  });
});
