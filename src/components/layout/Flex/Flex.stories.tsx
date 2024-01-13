import { styled } from 'styled-components';

import type { StoryObj } from '@storybook/react';

import Flex from './Flex';

const meta = {
  title: 'Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
`;

export const Primary: Story = {
  args: {
    gap: '4px',
    children: [<Box />, <Box />, <Box />, <Box />, <Box />, <Box />],
  },
};
