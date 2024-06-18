// src/components/Common/NavBar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const menuItems = [
    { text: 'Home', path: '/' }, 
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
    { text: 'Blog', path: '/blog' },
  ];

  return (
    <div>
      <AppBar position="static" color="primary" sx={{ bgcolor: 'purple' }}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Elewa.co
          </Typography>
          {isSmallScreen ? (
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {menuItems.map((item) => (
                  <ListItem button key={item.text} onClick={() => { navigate(item.path); setDrawerOpen(false); }}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
                {user ? (
                  <ListItem button onClick={handleLogout}>
                    <ListItemText primary="Logout" />
                  </ListItem>
                ) : (
                  <>
                    <ListItem button onClick={() => { navigate('/login'); setDrawerOpen(false); }}>
                      <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button onClick={() => { navigate('/signup'); setDrawerOpen(false); }}>
                      <ListItemText primary="Sign Up" />
                    </ListItem>
                  </>
                )}
              </List>
            </Drawer>
          ) : (
            <>
              {menuItems.map((item) => (
                <Button color="inherit" key={item.text} onClick={() => navigate(item.path)}>
                  {item.text}
                </Button>
              ))}
              {user ? (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Button color="inherit" onClick={() => navigate('/login')}>
                    Login
                  </Button>
                  <Button color="inherit" onClick={() => navigate('/signup')}>
                    Sign Up
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
