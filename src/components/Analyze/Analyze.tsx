import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ index, isOpen, title, content, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onToggle(index);
    }
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => onToggle(index)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        id={`accordion-header-${index}`}
        className="flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring"
      >
        {title}
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`accordion-content-${index}`}
        role="region"
        aria-labelledby={`accordion-header-${index}`}
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="px-6 py-4 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    {
      title: 'Discovery',
      content: "The individual's values align with a curiosity that…",
    },
    {
      title: 'Growth',
      content: 'They prioritize personal development and view challenges…',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          isOpen={openIndex === index}
          title={item.title}
          content={item.content}
          onToggle={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default Accordion;
