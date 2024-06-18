import React, { createContext, useContext, useState, useEffect } from 'react';
import { getData, saveData } from '../utils/storage'; // Utility functions for localStorage

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState(() => getData('roles', {}));
  const [departments, setDepartments] = useState(() => getData('departments', []));

  useEffect(() => {
    saveData('roles', roles);
  }, [roles]);

  useEffect(() => {
    saveData('departments', departments);
  }, [departments]);

  const assignRole = (userId, role) => {
    setRoles(prevRoles => ({
      ...prevRoles,
      [userId]: role
    }));
  };

  const createDepartment = (name) => {
    setDepartments([...departments, { name, employees: [] }]);
  };

  const moveEmployee = (employeeId, fromDept, toDept) => {
    setDepartments(prevDepartments => {
      return prevDepartments.map(dept => {
        if (dept.name === fromDept) {
          return { ...dept, employees: dept.employees.filter(id => id !== employeeId) };
        }
        if (dept.name === toDept) {
          return { ...dept, employees: [...dept.employees, employeeId] };
        }
        return dept;
      });
    });
  };

  const removeEmployee = (employeeId) => {
    setDepartments(prevDepartments => {
      return prevDepartments.map(dept => ({
        ...dept,
        employees: dept.employees.filter(id => id !== employeeId)
      }));
    });
  };

  return (
    <RoleContext.Provider value={{ roles, assignRole, departments, createDepartment, moveEmployee, removeEmployee }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
