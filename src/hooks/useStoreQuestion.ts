import { Question } from '@/types/Questions';
import { useEffect, useState } from 'react';

const useStoreQuestion = (questions: Question[]) => {
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const [questionId, setQuestionId] = useState<string | undefined>(undefined);

  const storeQuestion = (question: Question) => {
    setQuestion(question);
  };

  const storeQuestionId = (id: string) => {
    setQuestionId(id);
  };

  useEffect(() => {
    if (questionId && questions) {
      const selectedQuestion = questions.find(
        (question) => question.id === questionId,
      );
      if (selectedQuestion) {
        setQuestion(selectedQuestion);
      }
    }
  }, [questionId, questions]);

  return {
    question,
    storeQuestion,
    questionId,
    storeQuestionId,
  };
};

export default useStoreQuestion;
