/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';
import styled from 'styled-components';
import Modal from '.';

import OpenButton from './components/OpenButton';

const meta = {
  title: 'UI/Modal',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const StyledYellowBox = styled.div`
  width: 100%;
  height: 200px;
  background: yellow;
`;

export const Primary: Story = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Modal portalElementId="modal" />
        <OpenButton
          modalContent={
            <>
              <StyledYellowBox />
              <StyledYellowBox />
              <StyledYellowBox />
            </>
          }
          modalTitle="모달 열기 예제"
        >
          모달 열기
        </OpenButton>
      </div>
    );
  },
};
