import React from 'react';
import Card from './ConversatoinCard';
import { TemporaryConversation } from '@/types/Conversations';

interface MainProps {
  conversations: TemporaryConversation[];
  title: string;
}

const Main = ({ conversations, title }: MainProps) => {
  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conversations.map((conversation) => (
          <Card
            key={conversation.conversation_id}
            conversation_id={conversation.conversation_id}
            topic={conversation.topic || 'No Topic'}
            title={conversation.title || 'Untitled'}
            main_values={conversation.main_values}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
