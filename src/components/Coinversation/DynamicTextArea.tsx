'use client';
import React from 'react';

interface DynamicTextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}

const DynamicTextArea = ({
  value,
  onChange,
  textareaRef,
}: DynamicTextAreaProps) => {
  return (
    <div className="w-1/2">
      <textarea
        ref={textareaRef}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg resize-none overflow-hidden"
        rows={1}
        value={value}
        onChange={onChange}
        placeholder="Type here..."
        style={{ height: 'auto' }}
      />
    </div>
  );
};

export default DynamicTextArea;
