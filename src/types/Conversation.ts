export type UseSubmitTextReturn = {
  submitText: (
    payload: Payload,
    resetText: () => void,
  ) => Promise<ResponseObject | void>;
  loading: boolean;
  error: string | null;
};

export interface Payload {
  user_id: number;
  topic: string;
  prompt: string;
  max_tokens: number;
  conversation_id?: string; // Optional field
}

export interface ResponseObject {
  user_prompt: string;
  summary_response: string | undefined;
  question_response: string | undefined;
  analyze_response: string | undefined;
  conversation_id: string;
}

export type ResponseBody = Pick<
  ResponseObject,
  'summary_response' | 'question_response' | 'analyze_response' | 'user_prompt'
>;

export interface UserPromptAndResponseProps {
  item: ResponseBody;
  isLast: boolean;
}

export interface UserPromptProps {
  prompt: ResponseBody['user_prompt'];
}

export interface ResponseProps {
  summary: ResponseBody['summary_response'];
  question: ResponseBody['question_response'];
  analysis: ResponseBody['analyze_response'];
  isLast: boolean;
}

export type RoleContent = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

export type UserConversation = {
  user_id: number;
  conversation_id: string;
  question_id: string | null;
  topic: string;
  summaries: RoleContent[];
  analyze: RoleContent[];
  questions: RoleContent[];
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
  deleted_at: string | null;
  is_favorite: boolean;
  status: 'active' | 'inactive'; // Assuming status can have these values
  title: string | null;
};
