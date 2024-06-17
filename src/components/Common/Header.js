import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Elewa App
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/login">Login</Button>
          <Button color="inherit" href="/signup">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
