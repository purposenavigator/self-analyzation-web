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
