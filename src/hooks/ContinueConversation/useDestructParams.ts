import { Question, Conversation } from '@/types/Questions';
import { isConversation } from '@/hooks/useReceiveQuestionByRoute';

const useDestructParams = (params: Question | Conversation | undefined) => {
  if (!isConversation(params))
    return {
      title: '',
      explanation: '',
      question_title: '',
      conversation_id: '',
    };
  const { title, explanation, question_title, conversation_id } = params;
  return { title, explanation, question_title, conversation_id };
};

export default useDestructParams;
