// src/components/Common/Header.js
import React from 'react';
import NavBar from './NavBar';

const Header = ({ user, onLogout }) => {
  return <NavBar user={user} onLogout={onLogout} />;
};

export default Header;
