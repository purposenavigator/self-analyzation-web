'use client'; // Mark the component as a Client Component
import HeaderFooter from '@/components/HeaderFooter';
import Sidebar from '@/components/Sidebar';
import React from 'react';
import Link from 'next/link';
import MainContent from '@/components/Home/MainContent';

const items = [
  { title: 'Select a Question to Start', path: 'questions' },
  { title: 'Continue Your Conversations', path: 'conversations' },
  { title: 'View Your Values and Reasons', path: 'values' },
];

const renderer = (item: { title: string; path: string }) => (
  <li
    key={item.path}
    className="flex items-center w-full cursor-pointer border-4"
  >
    <Link href={{ pathname: `/${item.path}` }}>{item.title}</Link>
  </li>
);

export default function Home() {
  return (
    <HeaderFooter>
      <div className="flex flex-1">
        <Sidebar title={'Discover You'} items={items} renderer={renderer} />
        <MainContent />
      </div>
    </HeaderFooter>
  );
}
