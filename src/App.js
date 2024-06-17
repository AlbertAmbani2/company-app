import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import HomePage from './pages/HomePage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AdminPage from './pages/Admin/AdminPage';
import NotFound from './components/Common/NotFound';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import { AuthProvider } from './context/AuthContext';
import { RoleProvider } from './context/TaskContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RoleProvider>
          <div>
            <Header />
            <Container
              sx={{
                minHeight: 'calc(100vh - 64px - 64px)', // Adjust based on header and footer heights
                py: 4,
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin/*" element={<AdminPage />} />
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
