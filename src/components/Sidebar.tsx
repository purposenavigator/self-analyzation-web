'use client'; // This marks the component as a Client Component

import React from 'react';

const Sidebar = ({ handleClick, questions }: SidebarProps) => {
  return (
    <aside className="flex-1 bg-gray-100 h-screen p-5">
      <div className="text-lg font-bold mb-4">Pre-Made Questions</div>
      <ul className="space-y-4">
        {questions.map((question: Question) => (
          <li
            key={question.id}
            className="flex items-center w-full cursor-pointer"
            onClick={() => handleClick(question.id)}
          >
            <span className="text-red-500 pr-2">❓</span> {question.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
