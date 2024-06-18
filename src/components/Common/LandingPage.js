import React from 'react';
import { Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ flexGrow: 1, padding: (theme) => theme.spacing(4) }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{
              marginBottom: (theme) => theme.spacing(4),
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
            align="center"
          >
            Welcome to Elewa.co
          </Typography>
          <Typography variant="body1" align="center">
            Discover the details about our company and join us today.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} align="center">
          <Button
            variant="contained"
            color="primary"
            fullWidth={isMobile}
            sx={{ marginTop: (theme) => theme.spacing(2) }}
            href="/login"
          >
            Log In
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} align="center">
          <Button
            variant="outlined"
            color="primary"
            fullWidth={isMobile}
            sx={{ marginTop: (theme) => theme.spacing(2) }}
            href="/signup"
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
