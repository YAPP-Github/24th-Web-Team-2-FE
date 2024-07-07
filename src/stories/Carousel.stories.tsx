import type { Meta, StoryObj } from '@storybook/react';
import Carousel from '@/components/Carousel/Carousel';

const meta = {
  title: 'Example/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {},
  args: { width: 200, height: 200, length: 3 },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return (
      <Carousel {...args}>
        <Carousel.Wrapper>
          <Carousel.Item index={0}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>1번컴포넌트</div>
          </Carousel.Item>
          <Carousel.Item index={1}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'green' }}>2번컴포넌트</div>
          </Carousel.Item>
          <Carousel.Item index={2}>
            <div style={{ width: '200px', height: '200px' }}>3번컴포넌트</div>
          </Carousel.Item>
        </Carousel.Wrapper>

        <div className='flex justify-center pt-4'>
          <div style={{ width: '80px' }}>
            <Carousel.Dots size={8} imageLength={3} unSelectedColor='black' selectedColor='blue' />
          </div>
        </div>
        <div className='flex justify-between'>
          <Carousel.Move direction='prev' addFunc={() => console.log('이전')}>
            <button>이전버튼</button>
          </Carousel.Move>
          <Carousel.Move direction='next' addFunc={() => console.log('다음')}>
            <button>다음버튼</button>
          </Carousel.Move>
        </div>
      </Carousel>
    );
  },
};

export const NoDots: Story = {
  render: args => {
    return (
      <Carousel {...args}>
        <Carousel.Wrapper>
          <Carousel.Item index={0}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>1번컴포넌트</div>
          </Carousel.Item>
          <Carousel.Item index={1}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'green' }}>2번컴포넌트</div>
          </Carousel.Item>
          <Carousel.Item index={2}>
            <div style={{ width: '200px', height: '200px' }}>3번컴포넌트</div>
          </Carousel.Item>
        </Carousel.Wrapper>

        <div className='flex justify-between'>
          <Carousel.Move direction='prev' addFunc={() => console.log('이전')}>
            <button>이전버튼</button>
          </Carousel.Move>
          <Carousel.Move direction='next' addFunc={() => console.log('다음')}>
            <button>다음버튼</button>
          </Carousel.Move>
        </div>
      </Carousel>
    );
  },
};

export const OnlyDots: Story = {
  render: args => {
    return (
      <Carousel {...args}>
        <Carousel.Wrapper>
          <Carousel.Item index={0}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>1번컴포넌트</div>
          </Carousel.Item>
          <Carousel.Item index={1}>
            <div style={{ width: '200px', height: '200px', backgroundColor: 'green' }}>2번컴포넌트</div>
          </Carousel.Item>
          <Carousel.Item index={2}>
            <div style={{ width: '200px', height: '200px' }}>3번컴포넌트</div>
          </Carousel.Item>
        </Carousel.Wrapper>
        <div className='flex justify-center pt-4'>
          <div style={{ width: '80px' }}>
            <Carousel.Dots size={8} imageLength={3} unSelectedColor='black' selectedColor='blue' />
          </div>
        </div>
      </Carousel>
    );
  },
};
