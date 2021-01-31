import classnames from 'classnames';
import { ORDER } from 'const';
import {
  formatCurrency,
  formatDate,
  sortEmployees,
} from 'helpers/employeeHelper';
import React, { useCallback, useState } from 'react';
import './EmployeeTable.scss';

interface EmployeeTableProps {
  employees: Employee[];
}

function ChevronDownIcon({ inverse }: { inverse: boolean }) {
  const className = classnames('bi bi-chevron-down order-icon', {
    inverse,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={className}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}

export default function EmployeeTable({ employees }: EmployeeTableProps) {
  const [dateJoinedOrder, setDateJoinedOrder] = useState<'asc' | 'desc'>(
    ORDER.DESC
  );

  const handleDateJoinedHeaderClick = useCallback(() => {
    setDateJoinedOrder(dateJoinedOrder === ORDER.ASC ? ORDER.DESC : ORDER.ASC);
  }, [dateJoinedOrder]);

  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th scope="col">Full Name</th>
          <th
            className="d-flex justify-content-start align-items-center"
            scope="col"
            onClick={handleDateJoinedHeaderClick}
          >
            Date Joined{' '}
            <ChevronDownIcon inverse={dateJoinedOrder === ORDER.ASC} />
          </th>
          <th className="text-right" scope="col">
            Salary
          </th>
        </tr>
      </thead>
      <tbody>
        {sortEmployees(employees, 'dateJoined', dateJoinedOrder).map(
          ({ employeeId, dateJoined, fullName, salary }) => {
            return (
              <tr key={employeeId}>
                <th scope="row">{fullName}</th>
                <td>{formatDate(dateJoined)}</td>
                <td className="text-right">{formatCurrency(salary)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
