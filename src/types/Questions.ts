export interface SidebarProps<T> {
  title: string;
  renderer: (item: T) => React.ReactNode;
  items: T[];
}

export type Question = { [k: string]: string } & {
  question_id: string;
  title: string;
  explanation: string;
};

export type Conversation = { [k: string]: string } & {
  question_id: string;
  question_title: string;
  explanation: string;
  title: string;
  conversation_id: string;
};

export interface MainContentProps {
  question: Question | undefined;
}

export interface HeaderFooterProps {
  title: string;
  children: React.ReactNode;
}
