import React from 'react';
import LandingPage from '../components/Common/LandingPage';
import { Box } from '@mui/material';


const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      
      <Box component="main" flexGrow="1">
        <LandingPage />
      </Box>
      
    </Box>
  );
};

export default HomePage;
