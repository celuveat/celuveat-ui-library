import { styled } from 'styled-components';

import type { StoryObj } from '@storybook/react';

import Form from './Form';
import Input from '../Input';

const meta = {
  title: 'Form',
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

const validateIsError = (value = '') => {
  if (value === '안녕') return false;

  return true;
};

export const Primary: Story = {
  render: () => {
    return (
      <Wrapper>
        <Form>
          <Input inputName="안녕" inputValue="" validate={validateIsError}>
            <Input.Label text="인풋 이름" />
            <Input.Field />
            <Input.ErrorMessage message="오류" />
          </Input>
          <Input inputName="안녕" inputValue="" validate={validateIsError}>
            <Input.Label text="인풋 이름" />
            <Input.Field />
            <Input.ErrorMessage message="오류" />
          </Input>
          <Input inputName="안녕" inputValue="" validate={validateIsError}>
            <Input.Label text="인풋 이름" />
            <Input.Field />
            <Input.ErrorMessage message="오류" />
          </Input>
          <button type="submit">제출</button>
        </Form>
      </Wrapper>
    );
  },
};
