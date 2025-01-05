'use client'; // Mark the component as a Client Component
import HeaderFooter from '@/components/HeaderFooter';
import Main from '@/components/Conversations/Main';
import useGetAllUserConversations from '@/hooks/Conversations/useGetAllUserConversations';
import useStoreConversations from '@/hooks/Conversations/useStoreConversations';
import React from 'react';
import { PathProvider } from '@/components/PathProvider';

export default function ViewAnalyze() {
  const { data } = useGetAllUserConversations({ userId: '1' }, true);
  const retrieved = useStoreConversations(data ?? []);
  return (
    <PathProvider path={'analyze'}>
      <HeaderFooter title="Analyze Conversation">
        <Main conversations={retrieved} title={'Analyze Conversation'} />
      </HeaderFooter>
    </PathProvider>
  );
}
