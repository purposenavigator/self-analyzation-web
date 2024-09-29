'use client';
import HeaderFooter from '@/components/HeaderFooter';
import StickyComponent from '@/components/StickyComponent';
import useReceiveQuestionByRoute from '@/hooks/useReceiveQuestionByRoute';

function Conversation() {
  const { params } = useReceiveQuestionByRoute();

  if (!params) return null;
  const { title, explanation, id } = params;

  return (
    <HeaderFooter>
      <div className="flex flex-1">
        <StickyComponent
          title={title}
          explanation={explanation}
          questionId={id}
        />
        <div className="flex flex-1"></div>
      </div>
    </HeaderFooter>
  );
}

export default Conversation;
