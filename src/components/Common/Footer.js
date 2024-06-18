import React from 'react';
import { Typography, Container, Box, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} textAlign="center" bgcolor="purple" color="white">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
              Address: 123 Street, City, Country
              <br />
              Phone: +1234567890
              <br />
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body1">
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                Facebook
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                Twitter
              </Link>
              <Link href="#" color="inherit">
                Instagram
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" mt={2}>
          &copy; 2024 Company App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
