import EmployeeAnalyses from 'components/EmployeeAnalyses';
import EmployeeTable from 'components/EmployeeTable';
import EmployeeTally from 'components/EmployeeTally';
import {
  getHighestEarningEmployee,
  getMostRecentlyJoinedEmployee,
} from 'helpers/employeeHelper';
import { orderBy } from 'lodash';
import React, { useCallback, useState } from 'react';
import EmployeeService from 'services/employeeService';

const ASC = 'asc';
const DESC = 'desc';

function App() {
  const [employees] = useState<Employee[]>(EmployeeService.getEmployees());
  const [dateJoinedOrder, setDateJoinedOrder] = useState<'asc' | 'desc'>(DESC);

  const toggleDateJoinedOrder = useCallback(() => {
    setDateJoinedOrder(dateJoinedOrder === ASC ? DESC : ASC);
  }, [dateJoinedOrder]);

  return (
    <div className="employee-dashboard container">
      <div className="row align-items-center py-3">
        <div className="col-12 col-sm-4 col-md-2">
          <EmployeeTally tally={employees.length} />
        </div>
        <div className="col-12 col-sm-8 col-md-10">
          <EmployeeAnalyses
            analyses={{
              'Highest earning employee': getHighestEarningEmployee(employees),
              'Employee most recently joined': getMostRecentlyJoinedEmployee(
                employees
              ),
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <EmployeeTable
            employees={orderBy(employees, ['dateJoined'], [dateJoinedOrder])}
            toggleDateJoinedOrder={toggleDateJoinedOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
