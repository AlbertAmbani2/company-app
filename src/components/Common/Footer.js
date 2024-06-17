import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} textAlign="center" bgcolor="primary.main" color="white">
      <Container>
        <Typography variant="body1">&copy; 2024 Company App. All rights reserved.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
