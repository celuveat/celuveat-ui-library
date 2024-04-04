import { PropsWithChildren, createContext, useContext } from "react";


interface StackAnimationContextProps {
  stack: {
    id: string;
    [key: string]: any;
  }[];
  addStack: VoidFunction;
  removeStack: (id: string) => void;
}

export const StackAnimationContext = createContext<StackAnimationContextProps | null>(null);

export const useStackAnimationContext = (): StackAnimationContextProps => {
  const state = useContext(StackAnimationContext);

  if (!state) {
    throw new Error(
      "useReactionContext must be used within a ReactionProvider"
    );
  }

  return state;
};

function StackAnimationProvider({ stack, addStack, removeStack, children }: PropsWithChildren<StackAnimationContextProps>) {
  return (
    <StackAnimationContext.Provider
      value={{ stack, addStack, removeStack }}
    >
      {children}
    </StackAnimationContext.Provider>
  );
}

export default StackAnimationProvider;
