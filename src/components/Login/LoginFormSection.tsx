import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { UserAuthForm } from './UserAuthForm';

const LoginFormSection = () => (
  <Box
    sx={{
      p: 4,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Log in to your account
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Please enter your username and password to log in
      </Typography>
    </Box>
    <UserAuthForm />
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Typography variant="body2" color="textSecondary">
        Don't have an account?{' '}
        <Link href="/register" passHref>
          <Button variant="text" color="primary">
            Sign up
          </Button>
        </Link>
      </Typography>
    </Box>
  </Box>
);

export default LoginFormSection;
