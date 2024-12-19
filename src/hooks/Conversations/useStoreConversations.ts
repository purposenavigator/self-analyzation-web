import { Analysis, Conversation } from '@/types/Conversations';
import { useEffect, useState } from 'react';

const useStoreConversations = (analyses: Analysis[] | null) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    // Convert Analysis to Conversation whenever the analyses input changes
    const convertedConversations = analyses
      ? analyses.map((analysis) => ({
          conversation_id: analysis._id,
          user_id: analysis.user_id,
          topic: analysis.topic,
          title: analysis.title,
          main_values: analysis.keywords || [],
        }))
      : [];

    setConversations(convertedConversations);
  }, [analyses]);

  return conversations;
};

export default useStoreConversations;
