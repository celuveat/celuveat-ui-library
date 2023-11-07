import { createContext, useContext } from 'react';

interface DropDownContextProps {
  isOpen: boolean;
  close: VoidFunction;
  toggle: VoidFunction;
}

export const DropDownContext = createContext<DropDownContextProps | null>(null);

export const useDropDown = () => {
  const state = useContext(DropDownContext);
  if (!state) throw new Error('Cannot find DropDownProvider');
  return state;
};
