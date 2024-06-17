import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import HomePage from './pages/HomePage';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import AdminPage from './pages/Admin/AdminPage';
import UserTasks from './pages/EmployeePage';
import NotFound from './components/Common/NotFound';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { AuthProvider } from './context/AuthContext';
import { RoleProvider } from './context/TaskContext'; // Import RoleProvider
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(); // Create your custom theme if needed

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
	console.log('Logged out successfully');
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RoleProvider> {/* Wrap your App with RoleProvider */}
          <div>
            <Header user={user} onLogout={handleLogout} />
            <Container
              sx={{
                minHeight: 'calc(100vh - 64px - 64px)', // Adjust based on header and footer heights
                py: 4,
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/tasks" element={<UserTasks user={user} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
            <Footer />
          </div>
        </RoleProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
