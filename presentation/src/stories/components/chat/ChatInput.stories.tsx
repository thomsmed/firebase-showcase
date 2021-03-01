import React from 'react';
import { Story, Meta } from '@storybook/react';
import ChatInput, { ChatInputProps } from 'components/chat/ChatInput';

export default {
  title: 'Components/Chat/ChatInput',
  component: ChatInput,
  argTypes: { postMessage: { action: 'postMessage' } },
} as Meta;

const Template: Story<ChatInputProps> = (args) => <ChatInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
