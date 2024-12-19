import { Conversation, Question } from '@/types/Questions';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const isQuestion = (
  params: Question | Conversation | undefined,
): params is Question => {
  return !!(params && params.question_id !== undefined);
};

export const isConversation = (
  params: Question | Conversation | undefined,
): params is Conversation => !!(params && params.conversation_id !== undefined);

const useReceiveQuestionByRoute = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<Question | Conversation | undefined>();

  useEffect(() => {
    const paramsObject = Object.fromEntries(searchParams.entries()) as
      | Question
      | Conversation;
    setParams(paramsObject);
  }, [searchParams]);

  return { params };
};

export default useReceiveQuestionByRoute;
