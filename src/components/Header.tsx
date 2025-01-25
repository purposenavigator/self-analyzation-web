'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext'; // Import useAuth

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { logout } = useAuth(); // Get logout function from AuthContext
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : 'questions';

  const items = [
    { title: 'Pick Question', path: 'questions' },
    { title: 'Your Chats', path: 'conversations' },
    { title: 'View Values', path: 'viewAnalyze' },
  ];

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between">
      <div className="text-lg font-bold">{title}</div>
      <nav className="flex space-x-6">
        {items.map((item) => (
          <Link
            key={item.path}
            href={`/${item.path}`}
            className={`${pathname === `/${item.path}` ? 'bg-gray-200' : 'text-gray-600'}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button onClick={logout} className="text-red-600">
        Logout
      </button>{' '}
      {/* Add logout button */}
      <div>
        <input
          type="text"
          placeholder="Search in site"
          className="border p-2 rounded"
        />
      </div>
    </header>
  );
};

export default Header;
