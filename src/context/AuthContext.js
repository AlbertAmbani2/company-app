// src/context/AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    const savedIsAdmin = localStorage.getItem('isAdmin');
    return savedIsAdmin === 'true';
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAdmin', isAdmin);
  }, [user, isAdmin]);

  const login = (username, password) => {
    // Simulate login logic
    if (username === 'admin' && password === 'admin') {
      setUser({ username });
      setIsAdmin(true);
      localStorage.setItem('user', JSON.stringify({ username }));
      localStorage.setItem('isAdmin', true);
      navigate('/admin'); // Redirect to admin page upon successful login
    } else {
      setUser(null);
      setIsAdmin(false);
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    navigate('/'); // Redirect to homepage
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
