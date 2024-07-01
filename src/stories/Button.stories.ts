import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import PlusIcon from '@/assets/icons/PlusIcon';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: '이렇게 불러주세요',
    size: 'big',
  },
};
export const Disabled: Story = {
  args: {
    text: '이렇게 불러주세요',
    size: 'big',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    text: '디자인',
    size: 'small',
    // ChildIcon: <PlusIcon />, // FIXME: 여기 어떻게 수정해야 childIcon이 나오는지 모르겠음
  },
};

export const ButtonWithIconDisabled: Story = {
  args: {
    text: '디자인',
    isActivated: false,
    size: 'small',
    // ChildIcon: <PlusIcon />, // FIXME: 여기 어떻게 수정해야 childIcon이 나오는지 모르겠음
  },
};
