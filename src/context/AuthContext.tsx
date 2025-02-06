// app/context/AuthContext.tsx
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useAuthentication } from '../hooks/Authentication/useAuthentication'; // Import useAuthentication

/**
 * Authentication context properties.
 */
interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  error: string | null; // Add error type
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

/**
 * Provides authentication context to its children.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The AuthProvider component.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, login, logout, register, error } =
    useAuthentication(); // Use useAuthentication hook

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, register, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use the authentication context.
 * @returns {AuthContextProps} The authentication context.
 * @throws Will throw an error if used outside of AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
