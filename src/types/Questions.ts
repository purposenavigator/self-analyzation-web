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
