export interface SidebarProps<T> {
  title: string;
  renderer: (item: T) => React.ReactNode;
  items: T[];
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
