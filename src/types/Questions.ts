interface SidebarProps {
  handleClick: (id: number) => void;
  questions: Question[];
}

type Question = { [k: string]: string | number } & {
  id: number;
  title: string;
  explanation: string;
};

interface MainContentProps {
  question: Question | undefined;
}

interface HeaderFooterProps {
  children: React.ReactNode;
}

interface Payload {
  user_id: number;
  topic: string;
  prompt: string;
  max_tokens: number;
  conversation_id?: string; // Optional field
}

interface ResponseObject {
  user_prompt: string;
  summary_response: string;
  question_response: string;
  analyze_response: string;
  conversation_id: string;
}

type ResponseBody = Pick<
  ResponseObject,
  'summary_response' | 'question_response' | 'analyze_response' | 'user_prompt'
>;
