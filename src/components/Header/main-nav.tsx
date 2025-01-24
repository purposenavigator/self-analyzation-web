import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { title: 'Home', path: '/' },
  { title: 'Pick Question', path: '/questions' },
  { title: 'Your Chats', path: '/conversations' },
  { title: 'View Values', path: '/viewAnalyze' },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav
      className={`flex items-center space-x-4 lg:space-x-6 ${className}`}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === item.path ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
