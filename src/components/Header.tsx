import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
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
