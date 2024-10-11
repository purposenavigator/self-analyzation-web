import React from 'react';
import StartConversationButton from './StartConversationButton';
import { MainContentProps } from '@/types/Questions';

const MainContent = ({ question }: MainContentProps) => {
  return (
    <main className="flex-shrink-0 w-auto p-10">
      {question ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">{question.title}</h1>
          <p className="text-lg mb-6">{question.explanation}</p>
          <StartConversationButton question={question} />
        </div>
      ) : (
        <h1 className="text-4xl font-bold mb-4">No question selected</h1>
      )}
    </main>
  );
};

export default MainContent;
