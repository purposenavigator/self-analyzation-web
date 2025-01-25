import * as React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useAuth } from '@/context/AuthContext';
import TermsAndPrivacyNotice from '@/components/Register/TermsAndPrivacyNotice';

const formSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters long.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
});

export function UserSignUpForm() {
  const router = useRouter();
  const { register, error } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      await register(values.username, values.password);
      setIsLoading(false);
      enqueueSnackbar('A new account has been created.', {
        variant: 'success',
      });
      router.push('/');
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar('An error occurred while creating the account.', {
        variant: 'error',
      });
    }
  }

  return (
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
          Create an Account
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Please enter your username and password to create an account
        </Typography>
      </Box>
      <Box>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Box display="grid" gap={2}>
            <TextField
              label="Username"
              placeholder="your_username"
              {...form.register('username')}
              error={!!form.formState.errors.username}
              helperText={form.formState.errors.username?.message}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              placeholder="••••••••"
              {...form.register('password')}
              error={!!form.formState.errors.password}
              helperText={form.formState.errors.password?.message}
              fullWidth
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoading}
            >
              {isLoading && <CircularProgress size={24} sx={{ mr: 2 }} />}
              Create Account
            </Button>
          </Box>
        </form>
      </Box>
      <Box mt={2}>
        <TermsAndPrivacyNotice />
      </Box>
    </Box>
  );
}
