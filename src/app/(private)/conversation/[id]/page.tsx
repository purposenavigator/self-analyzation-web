'use client';
import DynamicTextArea from '@/components/Coinversation/DynamicTextArea';
import { InputProvider } from '@/components/Coinversation/InputProvider';
import ScrollableComponent from '@/components/Coinversation/ScrollableComponent';
import { Header } from '@/components/Header/Header';
import StickyComponent from '@/components/StickyComponent';
import { useGetConversationById } from '@/hooks/ContinueConversation/useGetConversationById';
import useDynamicTextArea from '@/hooks/Conversaton/useDynamicTextArea';
import useManageResponseBodies from '@/hooks/Conversaton/useManageResponseBodies';
import { useSubmitText } from '@/hooks/Conversaton/useSubmitText';
import useFetchQuestion from '@/hooks/useFethQuestion';
import { Payload } from '@/types/Conversation';
import React, { useState, useEffect } from 'react';
import useDestructParams from '@/hooks/ContinueConversation/useDestructParams';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';

const MAX_TOKENS = 150; // Constant value for max_tokens

function createPayload(
  topic: string,
  prompt: string,
  conversation_id?: string,
): Payload {
  const payload: Payload = {
    topic,
    prompt,
    max_tokens: MAX_TOKENS,
  };

  if (conversation_id) {
    payload.conversation_id = conversation_id;
  }

  return payload;
}

const useSetConversationId = (conversation_id: string | undefined) => {
  const [conversationId, setConversationId] = useState<string | undefined>(
    conversation_id,
  );

  useEffect(() => {
    if (conversation_id) setConversationId(conversation_id);
  }, [conversation_id]);

  return { conversationId, setConversationId };
};

function ConversationPage() {
  const { params } = useReceiveQuestionByRoute();
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useDynamicTextArea({ value: inputValue });
  const { submitText, loading, error } = useSubmitText();
  const { title, question_title, conversation_id } = useDestructParams(params);
  const { conversationId } = useSetConversationId(conversation_id);
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
      const payload = createPayload(question_title, inputValue, conversationId);
      addUserPrompt(inputValue);
      const result = await submitText(payload, resetText);
      if (result) {
        replaceLastResponseBody({
          summary_response: result.summary_response,
          question_response: result.question_response,
          analyze_response: result.analyze_response,
          answers_response: result.answers_response,
          user_prompt: result.user_prompt,
        });
      }
    }
  };

  return (
    <InputProvider setInputValue={setInputValue}>
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
    </InputProvider>
  );
}

export default ConversationPage;
