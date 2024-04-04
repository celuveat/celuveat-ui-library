import { ReactElement } from "react"; 

import Item from './Item';

import { useStackAnimationContext } from "./Provider";

interface ContainerProps {
  delay: number;
  children: ReactElement;
}

function Container({ children, delay }: ContainerProps) {
  const { stack } = useStackAnimationContext();

  return (
    <div>
      {stack.map(({ id, ...rest}) => {
        return <Item id={id} delay={delay} {...rest}>{children}</Item>
      })}
    </div>
  );

}

export default Container;
