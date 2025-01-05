// app/context/AuthContext.tsx
'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'; // Import useRouter

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const token = Cookies.get('auth_token');
    setIsAuthenticated(!!token);
  }, []);

  const login = (username: string, password: string) => {
    console.log('Login attempt:', username, password);
    Cookies.set('auth_token', 'your_token', {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    });
    setIsAuthenticated(true);
    router.push('/'); // Redirect to home after login
  };

  const logout = () => {
    Cookies.remove('auth_token');
    setIsAuthenticated(false);
    router.push('/login'); // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
