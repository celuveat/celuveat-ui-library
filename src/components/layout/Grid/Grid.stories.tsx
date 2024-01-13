import { styled } from 'styled-components';

import type { StoryObj } from '@storybook/react';

import Grid from '.';

const meta = {
  title: 'Grid',
  component: Grid,
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

const Wrapper = styled.div`
  width: 100vh;
  height: 300px;
`;

export const Primary: Story = {
  render: () => {
    return (
      <Wrapper>
        <Grid placeItems="center">
          <Grid.Item xs={8}>
            <Box />
          </Grid.Item>
          <Grid.Item xs={4}>
            <Box />
          </Grid.Item>
          <Grid.Item xs={12}>
            <Box />
          </Grid.Item>
        </Grid>
      </Wrapper>
    );
  },
};
