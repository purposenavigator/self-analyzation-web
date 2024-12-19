'use client'; // Mark the component as a Client Component
import React, { useEffect, useState } from 'react';

interface StickyComponentProps {
  title: string;
  explanation: string;
}

const StickyComponent = ({ title, explanation }: StickyComponentProps) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out border ${
        isSticky
          ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50'
          : 'relative w-full'
      }`}
    >
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-gray-600">{explanation}</p>
      </div>
    </div>
  );
};

export default StickyComponent;
