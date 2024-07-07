import type { Meta, StoryObj } from '@storybook/react';
import { EmailSenderButton } from '../components/EmailSenderButton';
import LinkedInIcon from '@/assets/icons/LinkedInIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/EmailSenderButton',
  component: EmailSenderButton,
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
    ChildIcon: typeof LinkedInIcon,
  },
} satisfies Meta<typeof EmailSenderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BeforeRegister: Story = {
  args: {
    title: 'LinkedIn 채용공고 알림',
    email: 'jobalerts-noreply@linkedin.com',
    tag: '채용',
    ChildIcon: <LinkedInIcon width={48} disabled={true} />,
    type: 'subscribe',
    isActivated: false,
    setIsActivated: () => {},
  },
};

export const AfterRegister: Story = {
  args: {
    title: 'LinkedIn 채용공고 알림',
    email: 'jobalerts-noreply@linkedin.com',
    tag: '채용',
    ChildIcon: <LinkedInIcon width={48} />,
    type: 'subscribe',
    isActivated: true,
    setIsActivated: () => {},
  },
};

export const BeforeSpam: Story = {
  args: {
    title: 'LinkedIn 채용공고 알림',
    email: 'jobalerts-noreply@linkedin.com',
    tag: '채용',
    ChildIcon: <LinkedInIcon width={48} disabled={true} />,
    type: 'spam',
    isActivated: false,
    setIsActivated: () => {},
  },
};

export const AfterSpam: Story = {
  args: {
    title: 'LinkedIn 채용공고 알림',
    email: 'jobalerts-noreply@linkedin.com',
    tag: '채용',
    ChildIcon: <LinkedInIcon width={48} disabled={false} />,
    type: 'spam',
    isActivated: true,
    setIsActivated: () => {},
  },
};
