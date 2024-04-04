import { ReactElement, cloneElement } from "react";
import { useStackAnimation } from './hooks/useStackAnimation';
import { useStackAnimationContext } from './Provider';

interface ItemProps {
  id: string;
  children: ReactElement;
  delay: number;
  [key: string]: any;
}

function Item({ id, children, delay = 1000, ...rest }: ItemProps) {
  const { isAdded, isVisible } = useStackAnimation(delay);
  const { removeStack } = useStackAnimationContext();

  const handleDisapplerClick = (id: string) => {
    removeStack(id);
  };

  return (
    <>
      {isAdded &&
        cloneElement(children, {
          isVisible,
          onAnimationEnd: () => handleDisapplerClick(id),
          ...rest,
        })}
    </>
  );
}

export default Item;
