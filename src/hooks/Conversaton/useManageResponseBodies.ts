import { useEffect, useState } from 'react';
import { ResponseBody, Conversation } from '@/types/Conversation';

const convertUserConversationToResponseBodies = (
  data?: Conversation | null,
): ResponseBody[] => {
  if (!data) return [];
  const summaries = data.summaries.filter(({ role }) => role !== 'system');
  const questions = data.questions.filter(({ role }) => role !== 'system');
  const analyzes = data.analyze.filter(({ role }) => role !== 'system');
  const answers = data.answers.filter(({ role }) => role !== 'system');

  const responseBodies = summaries.reduce((acc, summary, index) => {
    if (index % 2 === 0) {
      acc.push({
        user_prompt: summary.content,
        summary_response: undefined,
        question_response: undefined,
        analyze_response: undefined,
        answers_response: undefined,
      });
    } else {
      acc[acc.length - 1].summary_response = summary.content;
      acc[acc.length - 1].question_response = questions[index].content;
      acc[acc.length - 1].analyze_response = analyzes[index].content;
      acc[acc.length - 1].answers_response = answers.length
        ? answers[index].content
        : undefined;
    }

    return acc;
  }, [] as ResponseBody[]);

  return responseBodies;
};

const useManageResponseBodies = (data?: Conversation | null) => {
  const [responseBodies, setResponseBodies] = useState<ResponseBody[]>(
    convertUserConversationToResponseBodies(data),
  );

  useEffect(() => {
    setResponseBodies(convertUserConversationToResponseBodies(data));
  }, [data]);

  const addUserPrompt = (userPrompt: string) => {
    const newResponseBody = {
      user_prompt: userPrompt,
      summary_response: undefined,
      question_response: undefined,
      analyze_response: undefined,
      answers_response: undefined,
    };
    setResponseBodies((prevResponseBodies) => [
      ...prevResponseBodies,
      newResponseBody,
    ]);
  };

  const replaceLastResponseBody = (updatedResponse: ResponseBody) => {
    setResponseBodies((prevResponseBodies) => {
      const newResponseBodies = [...prevResponseBodies];
      newResponseBodies[newResponseBodies.length - 1] = updatedResponse;
      return newResponseBodies;
    });
  };

  return { responseBodies, addUserPrompt, replaceLastResponseBody };
};

export default useManageResponseBodies;
