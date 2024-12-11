import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathContext } from '../PathProvider';

interface CardProps {
  conversation_id: string;
  topic: string;
  title: string;
  main_values: string[];
}

const Card = ({ conversation_id, topic, title, main_values }: CardProps) => {
  const { createPath, dynamicPath } = usePathContext();
  useEffect(() => {
    createPath(conversation_id);
  }, [conversation_id, createPath]);
  return (
    <Link
      href={{
        pathname: dynamicPath,
        query: { title, conversation_id, question_title: topic },
      }}
      className="block bg-gray-100 shadow-md rounded-lg overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <span className="text-sm text-blue-600 bg-blue-100 rounded-full px-2 py-1 inline-block mb-4">
          {topic}
        </span>
        <div className="mb-2">
          <h3 className="font-semibold text-gray-700">Main Values:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {main_values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
