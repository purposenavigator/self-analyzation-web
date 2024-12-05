import { useState, useEffect, useCallback } from 'react';
import { postData } from '@/lib/api';
import { Analysis } from '@/types/Conversations';

interface UseRequestOptions {
  userId: string;
}

function useGetAllUserConversations(
  { userId }: UseRequestOptions,
  immediate = true, // optional flag to trigger the request on mount
) {
  const [data, setData] = useState<Analysis | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllUserConversations = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await postData<Analysis>('/user_conversations', {
        user_id: userId,
      });
      setData(responseData);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (immediate) {
      getAllUserConversations();
    }
  }, [immediate, userId]);

  return { data, error, loading, getAllUserConversations };
}

export default useGetAllUserConversations;
