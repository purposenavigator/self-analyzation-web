import React from 'react';
import UserPromptAndResponse from './UserPromptAndResponse';
import { ResponseBody } from '@/types/Conversation';

interface ScrollableComponentProps {
  data: ResponseBody[];
  loading: boolean;
  error: null | string;
}

const ScrollableComponent = ({
  data,
  loading,
  error,
}: ScrollableComponentProps) => {
  if (data.length === 0 && !loading) {
    return null; // Return null to render nothing
  }
  return (
    <div className="pm-20">
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
        }}
      >
        {data.map((item, index) => (
          <UserPromptAndResponse
            key={index}
            item={item}
            isLast={!!(data.length - 1 === index)}
          />
        ))}
        {error && (
          <div className="text-red-500 text-xl text-center">{error}</div>
        )}
      </div>
    </div>
  );
};

export default ScrollableComponent;
