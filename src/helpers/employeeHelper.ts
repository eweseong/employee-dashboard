import { ORDER } from 'const';
import { formatISO } from 'date-fns';
import { last, orderBy } from 'lodash';

export function getHighestEarningEmployee(employees: Employee[]) {
  const employee = last(sortEmployees(employees, 'salary'));

  if (employee) {
    const { fullName, salary } = employee;
    return `${fullName} (${formatCurrency(salary)})`;
  }

  return '';
}

export function getMostRecentlyJoinedEmployee(employees: Employee[]) {
  const employee = last(sortEmployees(employees, 'dateJoined'));

  if (employee) {
    const { fullName, dateJoined } = employee;
    return `${fullName} (${formatDate(dateJoined)})`;
  }

  return '';
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MYR',
  }).format(value);
}

export function formatDate(date: Date) {
  return formatISO(date, { representation: 'date' });
}

export function sortEmployees(
  employees: Employee[],
  key: string,
  order: 'asc' | 'desc' = ORDER.ASC
) {
  return orderBy(employees, [key], [order]);
}
