import styled from 'styled-components';
import { ReactNode, MouseEvent, MouseEventHandler, ComponentPropsWithoutRef } from 'react';

import { useStackAnimationContext } from './Provider';

interface TriggerProps extends ComponentPropsWithoutRef<'button'>{
  children: ReactNode;
  startAnimationAction?: MouseEventHandler<HTMLButtonElement>
}

function Trigger({ startAnimationAction, children, ...rest }: TriggerProps) {
  const { addStack } = useStackAnimationContext();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    addStack();

    startAnimationAction && startAnimationAction(e);
  };

  return <StyledButton onClick={handleClick} {...rest}>{children}</StyledButton>
}

export default Trigger;

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`