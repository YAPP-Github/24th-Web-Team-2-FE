import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextStyle } from './TextStyle';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/TextStyle',
  component: TextStyle,
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
} satisfies Meta<typeof TextStyle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1: Story = {
  args: {
    type: 'h1',
    text: 'H1',
  },
};

export const H2: Story = {
  args: {
    type: 'h2',
    text: 'H2',
  },
};

export const Body1: Story = {
  args: {
    type: 'body1',
    text: 'Body1',
  },
};

export const Body2: Story = {
  args: {
    type: 'body2',
    text: 'Body2',
  },
};

export const Body3: Story = {
  args: {
    type: 'body3',
    text: 'Body3',
  },
};

export const Caption: Story = {
  args: {
    type: 'caption',
    text: 'Caption',
  },
};

export const Btn1: Story = {
  args: {
    type: 'btn1',
    text: 'Btn1',
  },
};
