'use client';

import * as React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  BoxProps,
} from '@mui/material';

interface UserAuthFormProps extends BoxProps {
  className?: string;
}

async function login(username: string, password: string) {
  // Implement the actual login process here
  // Example: Validate the user in the database and create a session
  console.log('Login attempt:', username, password);

  // In this example, perform simple validation
  if (username === 'demo' && password === 'password') {
    return { success: true, message: 'Login successful' };
  } else {
    throw new Error('Incorrect username or password');
  }
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const target = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
    };

    const username = target.username.value;
    const password = target.password.value;

    try {
      await login(username, password);
      // Handle successful login (e.g., redirect to analysis page)
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., display error message)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box component="div" className={className} {...props}>
      <form onSubmit={onSubmit}>
        <Box display="grid" gap={2}>
          <Box display="grid" gap={1}>
            <TextField
              id="username"
              label="Username"
              placeholder="Username"
              type="text"
              autoComplete="username"
              disabled={isLoading}
              fullWidth
            />
          </Box>
          <Box display="grid" gap={1}>
            <TextField
              id="password"
              label="Password"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              disabled={isLoading}
              fullWidth
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            fullWidth
          >
            {isLoading && <CircularProgress size={24} sx={{ mr: 2 }} />}
            Log in
          </Button>
        </Box>
      </form>
    </Box>
  );
}
