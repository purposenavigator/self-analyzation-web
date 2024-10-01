'use client';
import React, { useState, useRef, useEffect } from 'react';

const DynamicTextInput = () => {
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [inputValue]);

  return (
    <div className="w-1/2">
      <textarea
        ref={textareaRef}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg resize-none overflow-hidden"
        rows={1}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here..."
        style={{ height: 'auto' }}
      />
    </div>
  );
};

export default DynamicTextInput;
