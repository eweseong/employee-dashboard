import React from 'react';
import styles from './EmployeeTally.module.scss';

interface EmployeeTallyProps {
  tally?: number;
}

function PersonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={styles.icon}
      viewBox="0 0 16 16"
    >
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
}

export default function EmployeeTally({ tally = 0 }: EmployeeTallyProps) {
  return (
    <div className="employee-tally d-flex justify-content-center justify-content-sm-start align-items-center">
      <PersonIcon />
      <span className={styles.tally}>{tally}</span>
    </div>
  );
}
