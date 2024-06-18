// src/pages/ContactPage.js
import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const ContactPage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" paragraph>
        This is the Contact page. You can reach us through the following social media platforms:
      </Typography>
      <Box display="flex" justifyContent="center" mt={4}>
        <IconButton
          component="a"
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default ContactPage;
