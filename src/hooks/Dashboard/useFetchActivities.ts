import { useState, useEffect } from 'react';
import { Activity } from '../../types/Activity';
import { Conversation } from '../../types/Conversation';
import { postData } from '../../lib/api';

export function useFetchActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const conversations: Conversation[] = await postData<Conversation[]>(
          '/user_conversations',
          {},
        );
        const mappedActivities: Activity[] = conversations.map(
          (conversation) => ({
            id: conversation._id,
            type: conversation.topic,
            title: conversation.title || 'No Title',
            time: 'dummy time', // Dummy string for time
            description: 'dummy description', // Dummy string for description
          }),
        );
        setActivities(mappedActivities);
      } catch (error) {
        console.error('Failed to fetch activities:', error);
      }
    }

    fetchActivities();
  }, []);

  return activities;
}
