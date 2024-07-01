import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InputBox } from './InputBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/InputBox',
  component: InputBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    setValue: { action: 'setValue' },
    guideLine: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { setValue: action('setValue') },
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    label: '이름',
    value: '홍길동',
    placeholder: '이름을 입력하세요',
    guideLine: '한글,영문 또는 숫자 중 1개 이상을 포함하여 2자 ~ 10자 입력해주세요',
  },
};
