import React, { useState } from 'react';
import Response from './Response';

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
          <Response key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ScrollableComponent;
