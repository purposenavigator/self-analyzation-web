import {
  ResponseProps,
  UserPromptAndResponseProps,
  UserPromptProps,
} from '@/types/Conversation';
import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import useScrollIntoView from '../../hooks/Conversaton/useScrollIntoView'; // Adjust the import path as necessary
import { cleanAndParse, Answer } from '@/lib/cleanAndParse';
import AnswerButton from './AnswerButton';

const UserPromprt = ({ prompt }: UserPromptProps) => (
  <p className="block mb-8 text-xl border py-8 px-4 w-1/2 ml-auto bg-gray-200 rounded-md">
    {prompt}
  </p>
);

const Response = ({ summary, question, answer, isLast }: ResponseProps) => {
  const containerRef = useScrollIntoView<HTMLElement, string | undefined>([
    summary,
  ]);

  if (summary === undefined || question === undefined || answer === undefined) {
    return (
      <div className="flex flex-2 mr-8" ref={isLast ? containerRef : undefined}>
        <UserCircleIcon className="h-12 w-12 text-gray-500" />
      </div>
    );
  } else {
    return (
      <div className="flex flex-row" ref={isLast ? containerRef : undefined}>
        <div className="flex flex-2 mr-8">
          <UserCircleIcon className="h-12 w-12 text-gray-500" />
        </div>
        <div>
          <div className="mb-2 text-lg font-semibold">Summary</div>
          <p className="block mb-4 text-xl">{summary}</p>
          <div className="mb-2 text-lg font-semibold">Question</div>
          <p className="block mb-4 text-xl">{question}</p>
          <div className="mb-2 mt-16 text-lg font-semibold">
            Possible Answers
          </div>
          {isLast && Array.isArray(cleanAndParse(answer))
            ? (cleanAndParse(answer) as Answer[]).map((item, index) => (
                <AnswerButton key={index} {...item} />
              ))
            : null}
        </div>
      </div>
    );
  }
};

const UserPromptAndResponse = ({
  item,
  isLast,
}: UserPromptAndResponseProps) => {
  console.log(item);
  return (
    <div className="mx-12 mt-12 mb-24">
      <UserPromprt prompt={item.user_prompt} />
      <Response
        summary={item.summary_response}
        question={item.question_response}
        answer={item.answers_response}
        isLast={isLast}
      />
    </div>
  );
};

export default UserPromptAndResponse;
