interface SidebarProps {
  handleClick: (id: number) => void;
  questions: Question[];
}

type Question = {
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
