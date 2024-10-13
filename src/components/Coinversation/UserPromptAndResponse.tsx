import {
  ResponseProps,
  UserPromptAndResponseProps,
  UserPromptProps,
} from '@/types/Conversation';
import React from 'react';

const UserPromprt = ({ prompt }: UserPromptProps) => (
  <p className="block mb-8 text-xl border py-8 px-4 w-1/2 ml-auto bg-gray-200 rounded-md">
    {prompt}
  </p>
);

const Response = ({ summary, question, analysis }: ResponseProps) => {
  if (
    summary === undefined ||
    question === undefined ||
    analysis === undefined
  ) {
    return null;
  } else {
    return (
      <>
        <div className="mb-2 text-lg font-semibold">Summary</div>
        <p className="block mb-4 text-xl">{summary}</p>
        <div className="mb-2 text-lg font-semibold">Question</div>
        <p className="block mb-4 text-xl">{question}</p>
        <div className="mb-2 text-lg font-semibold">Analysis</div>
        <div
          dangerouslySetInnerHTML={{
            __html: analysis.replace(/```html|```/g, ''),
          }}
        />
      </>
    );
  }
};

const UserPromptAndResponse = ({ item }: UserPromptAndResponseProps) => {
  return (
    <div className="mx-12 mt-12 mb-24">
      <UserPromprt prompt={item.user_prompt} />
      <Response
        summary={item.summary_response}
        question={item.question_response}
        analysis={item.analyze_response}
      />
    </div>
  );
};

export default UserPromptAndResponse;
