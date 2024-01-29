import { ChangeEventHandler, createContext, useContext } from 'react';

export interface InputActionContextProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleFocus: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;
  validate?: (value: string) => boolean;
}

export const InputActionContext = createContext<InputActionContextProps | null>(
  null
);

export const useInputActionContext = () => {
  const state = useContext(InputActionContext);
  if (!state) throw new Error('Cannot find InputContext');
  return state;
};
