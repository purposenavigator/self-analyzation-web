'use client'; // Mark the component as a Client Component
import HeaderFooter from '@/components/HeaderFooter';
import React from 'react';
import useGetAllUserConversations from '@/hooks/Conversations/useGetAllUserConversations';

export default function Conversations() {
  useGetAllUserConversations({ userId: '1' }, true);
  return (
    <HeaderFooter title="Conversations">
      <div className="flex flex-1"></div>
    </HeaderFooter>
  );
}
