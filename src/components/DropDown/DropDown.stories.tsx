import type { Meta, StoryObj } from '@storybook/react';
import DropDown from '.';

import './style.css';

const DropDownExample = () => {
  return (
    <DropDown>
      <DropDown.Trigger>trigger</DropDown.Trigger>
      <DropDown.Options>
        <DropDown.Option isCustom></DropDown.Option>
        <DropDown.Option>DROP_DOWN_ITEMS</DropDown.Option>
      </DropDown.Options>
    </DropDown>
  );
};

const meta = {
  title: 'UI/DropDown',
  component: DropDownExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
