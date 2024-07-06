import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { OnboardButton } from './OnboardButton';
import PlusIcon from '@/assets/icons/PlusIcon';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/OnboardButton',
  component: OnboardButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof OnboardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OnBoardEnabled: Story = {
  args: {
    text: '이렇게 선택할게요!',
    type: 'onboard',
    isActivated: true,
  },
};
export const OnBoardDisabled: Story = {
  args: {
    text: '이렇게 선택할게요!',
    isActivated: false,
    type: 'onboard',
  },
};

export const CategoryEnabled: Story = {
  args: {
    text: 'category',
    type: 'category',
    isActivated: true,
  },
};

export const CategoryDisabled: Story = {
  args: {
    text: 'category',
    type: 'category',
    isActivated: false,
  },
};
