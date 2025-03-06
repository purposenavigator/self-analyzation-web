import { postData } from '@/lib/api';
import { Conversation } from '@/types/Conversation';
import { useCallback, useEffect, useState } from 'react';

export const useGetConversationById = (conversationId: string) => {
  const [data, setData] = useState<Conversation | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getConversations = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await postData<Conversation>('/get_conversation', {
        conversation_id: id,
        user_id: 1,
      });
      setData(responseData);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (conversationId) getConversations(conversationId);
  }, [conversationId, getConversations]);

  return { data, error, loading };
};
