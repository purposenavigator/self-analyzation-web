import React, { createContext, useContext, ReactNode } from 'react';

interface InputContextValue {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputContext = createContext<InputContextValue | undefined>(undefined);

export const useInputContext = (): InputContextValue => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInputContext must be used within an InputProvider');
  }
  return context;
};

interface InputProviderProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  children: ReactNode;
}

export const InputProvider = ({
  setInputValue,
  children,
}: InputProviderProps) => {
  return (
    <InputContext.Provider value={{ setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
