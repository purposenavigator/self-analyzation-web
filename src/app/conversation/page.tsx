'use client';
import DynamicTextArea from '@/components/Coinversation/DynamicTextArea';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderFooter from '@/components/HeaderFooter';
import StickyComponent from '@/components/StickyComponent';
import useDynamicTextArea from '@/hooks/Conversaton/useDynamicTextArea';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';
import { useState } from 'react';

function Conversation() {
  const { params } = useReceiveQuestionByRoute();
  const [inputValue, setInputValue] = useState<string>('');
  const textareaRef = useDynamicTextArea({ value: inputValue });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  if (!params) return null;
  const { title, explanation, id } = params;

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
        <div className="flex justify-center fixed bottom-0 left-0 right-0 mb-4">
          <DynamicTextArea
            textareaRef={textareaRef}
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default Conversation;
