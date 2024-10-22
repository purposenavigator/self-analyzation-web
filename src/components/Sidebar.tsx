'use client'; // This marks the component as a Client Component

import { SidebarProps } from '@/types/Questions';
import React from 'react';

const Sidebar = <T,>({ items, renderer }: SidebarProps<T>) => {
  return (
    <aside className="flex-1 bg-gray-100 h-screen p-5">
      <div className="text-lg font-bold mb-4">Pre-Made Questions</div>
      <ul className="space-y-4">{items.map(renderer)}</ul>
    </aside>
  );
};

export default Sidebar;
