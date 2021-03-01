import React from 'react';
import { Story, Meta } from '@storybook/react';
import ChatMessage, { ChatMessageProps } from 'components/chat/ChatMessage';
import { longText, shortText, veryLongText } from 'stories/testData';

export default {
  title: 'Components/Chat/ChatMessage',
  component: ChatMessage,
} as Meta;

const Template: Story<ChatMessageProps> = (args) => <ChatMessage {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  message: {
    bot: false,
  }
};

export const Short = Template.bind({});
Short.args = {
  message: {
    body: shortText,
    bot: false,
  }
};

export const Long = Template.bind({});
Long.args = {
  message: {
    body: longText,
    bot: false,
  }
};

export const VeryLong = Template.bind({});
VeryLong.args = {
  message: {
    body: veryLongText,
    bot: false,
  }
};
