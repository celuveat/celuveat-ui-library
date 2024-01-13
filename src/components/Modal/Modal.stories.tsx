/* eslint-disable react-hooks/rules-of-hooks */
import type { StoryObj } from '@storybook/react';
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
        <OpenButton modalContent={'hi'}>모달 열기</OpenButton>
      </div>
    );
  },
};
