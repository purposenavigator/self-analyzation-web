'use client';
import DynamicTextArea from '@/components/Coinversation/DynamicTextArea';
import { InputProvider } from '@/components/Coinversation/InputProvider';
import ScrollableComponent from '@/components/Coinversation/ScrollableComponent';
import Header from '@/components/Header';
import StickyComponent from '@/components/StickyComponent';
import useDynamicTextArea from '@/hooks/Conversaton/useDynamicTextArea';
import useManageResponseBodies from '@/hooks/Conversaton/useManageResponseBodies';
import { useSubmitText } from '@/hooks/Conversaton/useSubmitText';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';
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

function Conversation() {
  const { params } = useReceiveQuestionByRoute();
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useDynamicTextArea({ value: inputValue });
  const [conversationId, setConversationId] = useState<string | undefined>();
  const { submitText, loading, error } = useSubmitText();
  const { responseBodies, addUserPrompt, replaceLastResponseBody } =
    useManageResponseBodies();

  if (!params) return null;
  const { title, explanation, questionId } = params;
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
          <StickyComponent
            title={title}
            explanation={explanation}
            questionId={questionId}
          />
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

export default Conversation;
