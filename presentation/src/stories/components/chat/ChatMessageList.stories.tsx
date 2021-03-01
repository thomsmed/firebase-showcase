import React from 'react';
import { Story, Meta } from '@storybook/react';
import ChatMessageList, { ChatMessageListProps } from 'components/chat/ChatMessageList';
import { longText, shortText, text, veryShortText } from 'stories/testData';

export default {
  title: 'Components/Chat/ChatMessageList',
  component: ChatMessageList,
} as Meta;

const Template: Story<ChatMessageListProps> = (args) => <ChatMessageList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  messages: []
};

export const One = Template.bind({});
One.args = {
  messages: [
    {
      body: veryShortText,
      bot: false,
    }
  ]
};

export const OneLong = Template.bind({});
OneLong.args = {
  messages: [
    {
      body: longText,
      bot: false,
    }
  ]
};

export const Several = Template.bind({});
Several.args = {
  messages: [
    {
      body: shortText,
      bot: false,
    },
    {
      body: text,
      bot: false,
    },
    {
      body: longText,
      bot: false,
    },
    {
      body: shortText,
      bot: false,
    },
    {
      body: text,
      bot: false,
    },
    {
      body: longText,
      bot: false,
    }
  ]
};
