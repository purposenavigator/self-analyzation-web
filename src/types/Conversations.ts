export interface Payload {
  user_id: number;
}

interface Message {
  content: string;
  role: 'system' | 'user' | 'assistant';
}

export interface Analysis {
  analyze: Message[];
  keywords: string[];
  questions: Message[];
  summaries: Message[];
  user_id: number;
  _id: string;
}
