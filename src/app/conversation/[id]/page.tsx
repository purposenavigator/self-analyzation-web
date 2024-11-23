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
import { Payload, ResponseBody } from '@/types/Conversation';
import React, { useState } from 'react';

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

const useManageResponseBodies = () => {
  const [responseBodies, setResponseBodies] = useState<ResponseBody[]>([]);

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

function Conversation() {
  const { params } = useReceiveQuestionByRoute();
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useDynamicTextArea({ value: inputValue });
  const [conversationId, setConversationId] = useState<string | undefined>();
  const { submitText, loading, error } = useSubmitText();
  const { responseBodies, addUserPrompt, replaceLastResponseBody } =
    useManageResponseBodies();
  const { title, question_title, conversation_id } = useDestructParams(params);
  const {
    question: { explanation },
  } = useFetchQuestion(question_title);

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

export default Conversation;
