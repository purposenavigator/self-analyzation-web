'use client';
import DynamicTextInput from '@/components/Coinversation/DynamicTextInput';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderFooter from '@/components/HeaderFooter';
import StickyComponent from '@/components/StickyComponent';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';

function Conversation() {
  const { params } = useReceiveQuestionByRoute();

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
          <DynamicTextInput />
        </div>
      </div>
    </>
  );
}

export default Conversation;
