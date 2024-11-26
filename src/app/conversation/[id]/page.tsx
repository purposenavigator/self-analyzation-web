'use client';
import DynamicTextArea from '@/components/Coinversation/DynamicTextArea';
import ScrollableComponent from '@/components/Coinversation/ScrollableComponent';
import Header from '@/components/Header';
import StickyComponent from '@/components/StickyComponent';
import useDynamicTextArea from '@/hooks/Conversaton/useDynamicTextArea';
import { useSubmitText } from '@/hooks/Conversaton/useSubmitText';
import useFetchQuestion from '@/hooks/useFethQuestion';
import useReceiveQuestionByRoute, {
  isConversation,
} from '@/hooks/useReceiveQuestionByRoute';
import { postData } from '@/lib/api';
import { Payload, ResponseBody, UserConversation } from '@/types/Conversation';
import { Question, Conversation } from '@/types/Questions';
import React, { useState, useCallback, useEffect, use } from 'react';

const MAX_TOKENS = 150; // Constant value for max_tokens

function createPayload(
  user_id: number,
  topic: string,
  prompt: string,
  conversation_id?: string,
): Payload {
  const payload: Payload = {
    user_id,
    topic,
    prompt,
    max_tokens: MAX_TOKENS,
  };

  if (conversation_id) {
    payload.conversation_id = conversation_id;
  }

  return payload;
}

const convertUserConversationToResponseBodies = (
  data: UserConversation | null,
): ResponseBody[] => {
  if (!data) return [];
  const summaries = data.summaries.filter(({ role }) => role !== 'system');
  const questions = data.questions.filter(({ role }) => role !== 'system');
  const analyzes = data.analyze.filter(({ role }) => role !== 'system');

  const responseBodies = summaries.reduce((acc, summary, index) => {
    if (index % 2 === 0) {
      acc.push({
        user_prompt: summary.content,
        summary_response: undefined,
        question_response: undefined,
        analyze_response: undefined,
      });
    } else {
      acc[acc.length - 1].summary_response = summary.content;
      acc[acc.length - 1].question_response = questions[index].content;
      acc[acc.length - 1].analyze_response = analyzes[index].content;
    }

    return acc;
  }, [] as ResponseBody[]);

  return responseBodies;
};

const useManageResponseBodies = (data: UserConversation | null) => {
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

const useGetConversationById = (conversationId: string) => {
  const [data, setData] = useState<UserConversation | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getConversations = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await postData<UserConversation>(
        '/get_conversation',
        {
          conversation_id: conversationId,
          user_id: 1,
        },
      );
      setData(responseData);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [conversationId]);

  useEffect(() => {
    getConversations();
  }, [getConversations]);

  return { data, error, loading };
};

function ConversationPage() {
  const { params } = useReceiveQuestionByRoute();
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useDynamicTextArea({ value: inputValue });
  const [conversationId, setConversationId] = useState<string | undefined>();
  const { submitText, loading, error } = useSubmitText();
  const { title, question_title, conversation_id } = useDestructParams(params);
  const {
    question: { explanation },
  } = useFetchQuestion(question_title);
  const { data } = useGetConversationById(conversation_id);
  const { responseBodies, addUserPrompt, replaceLastResponseBody } =
    useManageResponseBodies(data);

  const resetText = () => setInputValue('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const payload = createPayload(1, title, inputValue, conversationId);
      addUserPrompt(inputValue);
      const result = await submitText(payload, resetText);
      if (result) {
        setConversationId(result.conversation_id);
        replaceLastResponseBody({
          summary_response: result.summary_response,
          question_response: result.question_response,
          analyze_response: result.analyze_response,
          user_prompt: result.user_prompt,
        });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <StickyComponent title={question_title} explanation={explanation} />
      </div>
      <ScrollableComponent
        data={responseBodies}
        loading={loading}
        error={error}
      />
      <div className="flex justify-center fixed bottom-0 left-0 right-0 mb-4">
        <DynamicTextArea
          textareaRef={textareaRef}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default ConversationPage;
