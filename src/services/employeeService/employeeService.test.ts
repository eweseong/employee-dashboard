import { isDate } from 'date-fns';
import EmployeeService from './employeeService';

jest.mock('./_employees.json', () => [
  {
    id: 1000,
    employeeId: 'employeeId',
    firstname: 'John',
    lastname: 'Doe',
    dateJoined: 'Fri Dec 09 1994 18:04:18 GMT+0800 (Malaysia Time)',
    salary: 9999,
  },
]);

describe('EmployeeService', () => {
  describe('getEmployees()', () => {
    it('should return employees information', () => {
      const employees = EmployeeService.getEmployees();
      expect(employees).toHaveLength(1);
      expect(employees[0].employeeId).toEqual('employeeId');
    });

    it('should merge employee first and last name', () => {
      const employees = EmployeeService.getEmployees();
      expect(employees[0].fullName).toEqual('John, Doe');
    });

    it('should convert joined date to actual date', () => {
      const employees = EmployeeService.getEmployees();
      expect(isDate(employees[0].dateJoined)).toBeTruthy();
    });
  });
});
