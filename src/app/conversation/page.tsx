'use client';
import DynamicTextArea from '@/components/Coinversation/DynamicTextArea';
import ScrollableComponent from '@/components/Coinversation/ScrollableComponent';
import Header from '@/components/Header';
import StickyComponent from '@/components/StickyComponent';
import useDynamicTextArea from '@/hooks/Conversaton/useDynamicTextArea';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';
import { postData } from '@/lib/api';
import { useState } from 'react';

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

async function submitText(
  payload: Payload,
  resetText: () => void,
): Promise<ResponseObject | void> {
  try {
    const result = await postData<ResponseObject>('/conversation', payload);
    resetText();
    return result;
  } catch (e) {
    console.error(e);
  }
}

function Conversation() {
  const { params } = useReceiveQuestionByRoute();
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useDynamicTextArea({ value: inputValue });
  const [conversationId, setConversationId] = useState<string | undefined>();
  const [responseBodies, setResponseBodies] = useState<ResponseBody[]>([]);

  if (!params) return null;
  const { title, explanation, id } = params;
  const resetText = () => setInputValue('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const payload = createPayload(1, title, inputValue, conversationId);
      const result = await submitText(payload, resetText);
      if (result) {
        setConversationId(result.conversation_id);
        setResponseBodies([
          ...responseBodies,
          {
            summary_response: result.summary_response,
            question_response: result.question_response,
            analyze_response: result.analyze_response,
          },
        ]);
      }
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="flex justify-center">
          <StickyComponent
            title={title}
            explanation={explanation}
            questionId={id}
          />
        </div>
        <ScrollableComponent data={responseBodies} />
        <div className="flex justify-center fixed bottom-0 left-0 right-0 mb-4">
          <DynamicTextArea
            textareaRef={textareaRef}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </>
  );
}

export default Conversation;
