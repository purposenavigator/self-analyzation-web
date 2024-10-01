'use client'; // Mark the component as a Client Component
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import useFetchQuestions from '../hooks/useFetchQuestions';
import useStoreQuestion from '../hooks/useStoreQuestion';

const Body = () => {
  const { questions, loading, error } = useFetchQuestions();
  const { storeQuestionId, question } = useStoreQuestion(questions);
  return (
    <div className="flex">
      <Sidebar handleClick={storeQuestionId} questions={questions} />
      <MainContent question={question} />
    </div>
  );
};

export default Body;
