import React from 'react';
export default function MainContent() {
  return (
    <div className="flex-1 max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        How the App Helps You Find Your Values
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        The app offers a structured process to help you identify your personal
        values through guided conversations. By using reflective questions and
        discussions, you can explore what resonates most deeply with you.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-300 pb-2">
        Steps Overview
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700">
        <li className="flex items-start">
          <span className="font-medium">Reflect:</span>&nbsp;Think deeply about
          your experiences
        </li>
        <li className="flex items-start">
          <span className="font-medium">List:</span>&nbsp;Create a list of
          values that matter to you
        </li>
        <li className="flex items-start">
          <span className="font-medium">Explore:</span>&nbsp;Compare and refine
          your list
        </li>
      </ol>
    </div>
  );
}
