'use client'; // Mark the component as a Client Component
import HeaderFooter from '@/components/HeaderFooter';
import React from 'react';
import useGetAllUserConversations from '@/hooks/Conversations/useGetAllUserConversations';
import Main from '@/components/Conversations/Main';
import useStoreConversations from '@/hooks/Conversations/useStoreConversations';

const conversations = [
  {
    conversation_id: '1',
    topic: 'Self-Reflection',
    title: 'Finding Personal Values',
    main_values: ['Honesty', 'Resilience', 'Empathy'],
  },
  {
    conversation_id: '2',
    topic: 'Motivation',
    title: 'Overcoming Challenges',
    main_values: ['Persistence', 'Adaptability', 'Courage'],
  },
  {
    conversation_id: '3',
    topic: 'Relationships',
    title: 'Building Strong Connections',
    main_values: ['Trust', 'Communication', 'Support'],
  },
  {
    conversation_id: '4',
    topic: 'Career Growth',
    title: 'Achieving Professional Success',
    main_values: ['Ambition', 'Learning', 'Discipline'],
  },
  {
    conversation_id: '5',
    topic: 'Health and Wellness',
    title: 'Maintaining a Balanced Lifestyle',
    main_values: ['Fitness', 'Nutrition', 'Mental Health'],
  },
  {
    conversation_id: '6',
    topic: 'Financial Planning',
    title: 'Securing Your Financial Future',
    main_values: ['Saving', 'Investing', 'Budgeting'],
  },
  {
    conversation_id: '7',
    topic: 'Personal Development',
    title: 'Enhancing Self-Awareness',
    main_values: ['Reflection', 'Self-Improvement', 'Mindfulness'],
  },
  {
    conversation_id: '8',
    topic: 'Emotional Intelligence',
    title: 'Understanding and Managing Emotions',
    main_values: ['Self-Control', 'Empathy', 'Positivity'],
  },
  {
    conversation_id: '9',
    topic: 'Leadership',
    title: 'Inspiring and Guiding Others',
    main_values: ['Influence', 'Vision', 'Integrity'],
  },
  {
    conversation_id: '10',
    topic: 'Creativity',
    title: 'Fostering Innovative Ideas',
    main_values: ['Curiosity', 'Originality', 'Problem-Solving'],
  },
];

export default function Conversations() {
  const { data } = useGetAllUserConversations({ userId: '1' }, true);
  const retrieved = useStoreConversations(data ?? []);
  return (
    <HeaderFooter title="Conversations">
      <Main conversations={retrieved} />
    </HeaderFooter>
  );
}
