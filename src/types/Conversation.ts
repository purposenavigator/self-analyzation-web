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
  question_id: string;
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
