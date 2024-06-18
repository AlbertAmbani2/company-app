import React from 'react';
import { Container, Button } from '@mui/material';
import { useRole } from '../../context/RoleContext';

const ManagerDashboard = () => {
  const { departments, moveEmployee, removeEmployee } = useRole();

  const handleMoveEmployee = () => {
    const employeeId = prompt('Enter Employee ID to move:');
    const fromDept = prompt('Enter current department:');
    const toDept = prompt('Enter new department:');
    moveEmployee(employeeId, fromDept, toDept);
  };

  const handleRemoveEmployee = () => {
    const employeeId = prompt('Enter Employee ID to remove:');
    removeEmployee(employeeId);
  };

  return (
    <Container>
      <h2>Manager Dashboard</h2>
      <div>
        <Button variant="contained" color="primary" onClick={handleMoveEmployee}>
          Move Employee
        </Button>
        <Button variant="contained" color="secondary" onClick={handleRemoveEmployee}>
          Remove Employee
        </Button>
      </div>
      <ul>
        {departments.map((dept, index) => (
          <li key={index}>
            <strong>{dept.name}</strong>
            <ul>
              {dept.employees.map((empId) => (
                <li key={empId}>{empId}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ManagerDashboard;
