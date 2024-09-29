import Link from 'next/link';

const StartConversationButton = ({ question }: MainContentProps) => {
  if (!question) return null;
  const { title, explanation, id } = question;
  return (
    <Link
      className="bg-black text-white py-2 px-4 rounded"
      href={{
        pathname: '/conversation',
        query: { title, explanation, questionId: id },
      }}
    >
      Start Conversation
    </Link>
  );
};

export default StartConversationButton;
