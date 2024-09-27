import Link from 'next/link';

const StartConversationButton = ({ question }: MainContentProps) => {
  return (
    <Link
      className="bg-black text-white py-2 px-4 rounded"
      href="/conversation"
    >
      Start Conversation
    </Link>
  );
};

export default StartConversationButton;
