import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserTasks from '../components/Employee/TaskList'; // Correct import path

const EmployeePage = ({ user }) => {
  return (
    <Container
      sx={{
        p: 4,
        '@media (max-width: 600px)': {
          p: 2,
        },
        '@media (min-width: 1200px)': {
          p: 5,
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          textAlign: 'center',
          '@media (max-width: 600px)': {
            textAlign: 'left',
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: '1.5rem', // small screen
              sm: '2rem', // medium screen
              md: '2.5rem', // large screen
            },
            '@media (max-width: 600px)': {
              mb: 2,
            },
            '@media (min-width: 1200px)': {
              mb: 4,
            },
          }}
        >
          {user.name}'s Tasks
        </Typography>
        <UserTasks user={user} />
      </Box>
    </Container>
  );
};

export default EmployeePage;
