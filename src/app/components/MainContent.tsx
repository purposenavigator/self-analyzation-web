import React from 'react';

const MainContent = () => {
  return (
    <main className="flex-8 p-10">
      <h1 className="text-4xl font-bold mb-4">Question Title</h1>
      <p className="text-lg mb-6">Question Explanation</p>
      <button className="bg-black text-white py-2 px-4 rounded">Start Conversation</button>
    </main>
  );
};

export default MainContent;
