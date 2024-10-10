import React, { useState } from 'react';
import UserPromptAndResponse from './UserPromptAndResponse';

interface ScrollableComponentProps {
  data: ResponseBody[];
}

const ScrollableComponent = ({ data }: ScrollableComponentProps) => {
  return (
    <div>
      <div
        style={{
          overflowY: 'scroll', // Make the div scrollable
          border: '1px solid #ccc',
          padding: '10px',
        }}
      >
        {data.map((item, index) => (
          <UserPromptAndResponse key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ScrollableComponent;
