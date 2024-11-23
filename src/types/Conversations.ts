export interface Payload {
  user_id: number;
}

interface Message {
  content: string;
  role: 'system' | 'user' | 'assistant';
}

export interface Analysis {
  analyze: Message[];
  keywords?: string[];
  questions: Message[];
  summaries: Message[];
  user_id: number;
  topic: string;
  title: string;
  _id: string;
}

export interface Conversation {
  conversation_id: string;
  user_id: number;
  topic: string;
  title: string;
  main_values: string[];
}
// Define the utility type
type OptionalStringFields<T, K extends keyof T> = {
  [P in K]: string | undefined;
} & Omit<T, K>;

// Apply the utility type to Conversation
export type TemporaryConversation = OptionalStringFields<
  Conversation,
  'topic' | 'title'
>;

// Now, UpdatedConversation will have `topic` and `title` as `string | undefined`
