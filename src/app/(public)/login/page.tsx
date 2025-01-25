import React from 'react';
import { Metadata } from 'next';
import AppTitleSection from '@/components/AppTitleSection';
import LoginFormSection from '@/components/Login/LoginFormSection';
import ResponsiveContentWrapper from '@/components/ResponsiveContentWrapper';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Log in to your account to start conversation analysis.',
};

export default function LoginPage() {
  return (
    <ResponsiveContentWrapper>
      <AppTitleSection />
      <LoginFormSection />
    </ResponsiveContentWrapper>
  );
}
