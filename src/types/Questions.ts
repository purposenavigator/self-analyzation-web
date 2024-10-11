export interface SidebarProps {
  handleClick: (id: number) => void;
  questions: Question[];
}

export type Question = { [k: string]: string | number } & {
  id: number;
  title: string;
  explanation: string;
};

export interface MainContentProps {
  question: Question | undefined;
}

export interface HeaderFooterProps {
  children: React.ReactNode;
}

export interface Payload {
  user_id: number;
  topic: string;
  prompt: string;
  max_tokens: number;
  conversation_id?: string; // Optional field
}

export interface ResponseObject {
  user_prompt: string;
  summary_response: string;
  question_response: string;
  analyze_response: string;
  conversation_id: string;
}

export type ResponseBody = Pick<
  ResponseObject,
  'summary_response' | 'question_response' | 'analyze_response' | 'user_prompt'
>;
