import { Answer } from '@/lib/cleanAndParse';
import React, { useState } from 'react';
import { useInputContext } from './InputProvider';

const AnswerButton = ({ title, answer }: Answer) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { setInputValue } = useInputContext();

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible((prev) => !prev);
  };

  const copyToClipboard = () => {
    setInputValue(answer);
  };

  return (
    <div className="border-b border-gray-300 py-2">
      <button
        onClick={toggleAnswerVisibility}
        className="flex items-center justify-between w-full text-left text-blue-600 text-xl focus:outline-none hover:text-blue-800"
      >
        <span className="text-lg">{title}</span>
        <span className="text-2xl font-bold">
          {isAnswerVisible ? '-' : '+'}
        </span>
      </button>
      {isAnswerVisible && (
        <div>
          <p className="mt-2 text-ms text-gray-700">{answer}</p>
          <button
            onClick={copyToClipboard}
            className="mt-2 px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-800 focus:outline-none"
          >
            Copy Text
          </button>
        </div>
      )}
    </div>
  );
};

export default AnswerButton;
