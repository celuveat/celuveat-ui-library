import { styled } from 'styled-components';

import type { StoryObj } from '@storybook/react';

import Input from '.';

const meta = {
  title: 'Input',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = styled.div`
  width: 100vh;
  height: 300px;
`;

const validate = (value = '') => {
  if (value === '안녕') return true;

  return false;
};

export const Primary: Story = {
  render: () => {
    return (
      <Wrapper>
        <Input inputName="안녕" inputValue="" validate={validate}>
          <Input.Label text="인풋 이름" />
          <Input.Field />
          <Input.ErrorMessage message="오류" />
        </Input>
      </Wrapper>
    );
  },
};
