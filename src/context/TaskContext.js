// src/context/RoleContext.js

import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Employee 1', role: 'employee' },
    { id: 2, name: 'Employee 2', role: 'employee' },
    // Add more users here
  ]);

  const assignManagerRole = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: 'manager' } : user
      )
    );
  };

  return (
    <RoleContext.Provider value={{ users, assignManagerRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
