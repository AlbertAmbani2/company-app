import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Box,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fake authentication by checking against JSONPlaceholder users
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const user = response.data.find((user) => user.username === username);

      if (user) {
        onLogin(user); // Pass user data to the parent component or context
        navigate('/tasks'); // Navigate to the tasks page
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            p: 4,
            border: '1px solid #ccc',
            borderRadius: 2,
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            width: '100%',
            maxWidth: '400px',
            '@media (max-width: 600px)': {
              p: 2,
            },
            '@media (min-width: 1200px)': {
              p: 5,
              maxWidth: '500px',
            },
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
