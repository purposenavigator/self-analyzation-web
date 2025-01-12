// app/context/AuthContext.tsx
'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { getData, postData } from '../lib/api'; // Import getData and postData

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  register: (username: string, password: string) => void; // Add register function
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Check authentication status from backend
    const checkAuthStatus = async () => {
      try {
        const data = await getData<{ isAuthenticated: boolean }>(
          '/current_user',
        );
        console.log('Auth status:', data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      }
    };
    checkAuthStatus();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      await postData('/login', { username, password });
      setIsAuthenticated(true);
      router.push('/'); // Redirect to home after login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async () => {
    try {
      await postData('/logout', {});
      setIsAuthenticated(false);
      router.push('/login'); // Redirect to login after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const register = async (username: string, password: string) => {
    try {
      await postData('/register', { username, password });
      setIsAuthenticated(true);
      router.push('/'); // Redirect to home after registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
