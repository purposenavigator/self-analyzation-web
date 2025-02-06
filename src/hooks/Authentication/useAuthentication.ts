import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getData, postData } from '../../lib/api';

/**
 * Custom hook for handling authentication logic.
 * This hook is not used directly but is used via the AuthContext.
 * @returns {Object} Authentication state and functions.
 */
export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
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
  }, [router]);

  /**
   * Logs in the user.
   * @param {string} username - The username.
   * @param {string} password - The password.
   */
  const login = async (username: string, password: string) => {
    try {
      await postData('/login', { username, password });
      setIsAuthenticated(true);
      setError(null);
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password');
    }
  };

  /**
   * Logs out the user.
   */
  const logout = async () => {
    try {
      await postData('/logout', {});
      setIsAuthenticated(false);
      setError(null);
      router.replace('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      setError('Failed to logout');
    }
  };

  /**
   * Registers a new user.
   * @param {string} username - The username.
   * @param {string} password - The password.
   */
  const register = async (username: string, password: string) => {
    try {
      await postData('/register', { username, password });
      setIsAuthenticated(true);
      setError(null);
      router.push('/');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed');
    }
  };

  return {
    isAuthenticated,
    login,
    logout,
    register,
    error,
  };
};
