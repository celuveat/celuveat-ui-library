import type { StoryObj } from '@storybook/react';
import styled, { keyframes } from 'styled-components';
import { useState, useId } from "react";
import { getRandomNumber } from '../../utils/getRandomNumber';

import StackAnimation from '.';

export interface ReactionIconStack {
  id: string;
  left: `${number}%`;
  opacity: number;
}

const meta = {
  title: 'UI/StackAnimation',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const fadeInOut = keyframes`
  0% {
    filter: opacity(1);
  }
  25% {
    transform: translate(25%, -200%) rotate(10deg);
    filter: opacity(0.8);
  }
  50% {
    transform: translate(-25%, -400%);
    filter: opacity(0.6);
  }
  75% {
    transform: translate(25%, -600%) rotate(-10deg);
    filter: opacity(0.2);
  }
  100% {
    transform: translate(-25%, -800%);
    filter: opacity(0);
  }
`;

const useIconEffectStack = () => {
  const id = useId();
  const [iconStack, setIconStack] = useState<ReactionIconStack[]>([]);

  const addIconStack = () => {
    const newIconState: ReactionIconStack = {
      id,
      left: `${getRandomNumber(-15, 15)}%`,
      opacity: getRandomNumber(3, 10) / 10,
    };

    setIconStack([...iconStack, newIconState]);
  };

  const removeIconStack = (targetId: ReactionIconStack["id"]) => {
    const updateIconStack = [...iconStack];

    setIconStack(updateIconStack.filter(({ id }) => id !== targetId));
  };

  return { iconStack, addIconStack, removeIconStack };
};

const StyledIconEffect = styled.div<{ left?: `${number}%` }>`
  position: absolute;
  right: ${(props) => `${props?.left}`};
  top: -10px;
  font-size: 1.4em;

  animation: ${fadeInOut} 1.5s linear forwards;
`;

const StyledIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: red;
  z-index: 99;
`;

const StyledButton = styled.button`
  position: relative;
`



export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    const { iconStack, addIconStack, removeIconStack } = useIconEffectStack();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <StackAnimation stack={iconStack} addStack={addIconStack} removeStack={removeIconStack} >
          <StackAnimation.Trigger>
            <StyledButton>
            <StackAnimation.Container delay={2000}>
              <StyledIconEffect>
                <StyledIcon />
              </StyledIconEffect>
            </StackAnimation.Container> 
              좋아요!
            </StyledButton>
          </StackAnimation.Trigger>
      
        </StackAnimation>      
      </div>
    );
  },
};
