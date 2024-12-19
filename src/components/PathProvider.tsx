import React, { createContext, useContext, ReactNode } from 'react';

interface PathContextValue {
  createPath: (id: string) => void;
  dynamicPath: string;
}

const PathContext = createContext<PathContextValue | undefined>(undefined);

export const usePathContext = (): PathContextValue => {
  const context = useContext(PathContext);
  if (!context) {
    throw new Error('usePathContext must be used within an PathProvider');
  }
  return context;
};

interface PathProviderProps {
  path: string;
  children: ReactNode;
}

export const PathProvider = ({ path, children }: PathProviderProps) => {
  const [dynamicPath, setDynamicPath] = React.useState<string>('');
  const createPath = (id: string) => {
    setDynamicPath(`${path}/${id}`);
  };
  return (
    <PathContext.Provider value={{ createPath, dynamicPath }}>
      {children}
    </PathContext.Provider>
  );
};
