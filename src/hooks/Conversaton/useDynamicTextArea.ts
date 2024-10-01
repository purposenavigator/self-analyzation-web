import { useRef, useEffect } from 'react';

interface UseDynamicTextAreaProps {
  value: string;
}

const useDynamicTextArea = ({ value }: UseDynamicTextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return textareaRef;
};

export default useDynamicTextArea;
