import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

const TermsAndPrivacyNotice = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      By creating an account, you agree to our{' '}
      <Link href="/terms" passHref>
        <MuiLink underline="hover" color="primary">
          Terms of Service
        </MuiLink>
      </Link>{' '}
      and{' '}
      <Link href="/privacy" passHref>
        <MuiLink underline="hover" color="primary">
          Privacy Policy
        </MuiLink>
      </Link>
      .
    </Typography>
  );
};

export default TermsAndPrivacyNotice;
