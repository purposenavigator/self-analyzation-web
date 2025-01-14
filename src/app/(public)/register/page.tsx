'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { UserSignUpForm } from '@/components/Register/UserSignUpForm';
import AppTitleSection from '@/components/AppTitleSection';
import ResponsiveContentWrapper from '@/components/ResponsiveContentWrapper';
import Link from 'next/link';
import GhostButton from '@/components/Buttons/GhostButton';

export default function RegisterPage() {
  return (
    <ResponsiveContentWrapper>
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <Link href="/login" passHref>
          <GhostButton>Log In</GhostButton>
        </Link>
      </Box>
      <AppTitleSection />
      <UserSignUpForm />
    </ResponsiveContentWrapper>
  );
}
