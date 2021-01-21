import { parse } from 'date-fns';
import _employees from './_employees.json';

const EMPLOYEE_JOIN_DATE_FORMAT =
  "EEE MMM dd yyyy HH:mm:ss 'GMT'XXXX '(Malaysia Time)'";

const EmployeeService = {
  getEmployees: () => {
    return _employees.map((employee) => {
      const { dateJoined, employeeId, firstname, lastname, salary } = employee;
      return {
        employeeId,
        dateJoined: parse(dateJoined, EMPLOYEE_JOIN_DATE_FORMAT, Date.now()),
        fullName: `${firstname}, ${lastname}`,
        salary,
      };
    });
  },
};

export default EmployeeService;
