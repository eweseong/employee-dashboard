import React from 'react';

interface EmployeeAnalysesProps {
  analyses: { [key: string]: string };
}

export default function EmployeeAnalyses({ analyses }: EmployeeAnalysesProps) {
  return (
    <div className="employee-analyses d-flex align-items-start align-items-md-end flex-column pt-3 pt-sm-0">
      {Object.entries(analyses).map(([key, value]) => (
        <div key={key} className="employee-analysis">
          {key}: <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}
