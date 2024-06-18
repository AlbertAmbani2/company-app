// src/pages/BlogPage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    excerpt: 'This is a short excerpt for the first blog post. It gives a brief overview of the content.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    excerpt: 'This is a short excerpt for the second blog post. It gives a brief overview of the content.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Third Blog Post',
    excerpt: 'This is a short excerpt for the third blog post. It gives a brief overview of the content.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const BlogPage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.imageUrl}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.excerpt}
                </Typography>
                <Button size="small" color="primary" href={`/blog/${post.id}`}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPage;
