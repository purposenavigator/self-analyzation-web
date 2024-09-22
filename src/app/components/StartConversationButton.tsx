
'use client'; // This marks the component as a Client Component
import { useRouter } from "next/router";

const StartConversationButton = ({question}: MainContentProps) => {
  //const router = useRouter();
//
//  const startConversation = () => {
//    if (question) {
//      router.push(`/conversation/${question.id}`);
//    }
//  };

  return (
    <button className="bg-black text-white py-2 px-4 rounded" >
        Start Conversation
    </button>
  );
}

export default StartConversationButton;