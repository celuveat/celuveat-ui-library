import { createContext, useContext } from 'react';

export interface InputContextProps {
  name: string;
  value: string;
  touched: boolean;
  isError: boolean;
}

export const InputContext = createContext<InputContextProps | null>(null);

export const useInputContext = () => {
  const state = useContext(InputContext);
  if (!state) throw new Error('Cannot find InputContext');
  return state;
};
