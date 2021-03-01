import React from 'react';
import { Story, Meta } from '@storybook/react';
import Chat, { ChatProps } from 'components/chat/Chat';
import { longText, shortText, text, veryShortText } from 'stories/testData';

export default {
  title: 'Components/Chat/Chat',
  component: Chat,
  argTypes: { postMessage: { action: 'postMessage' } },
} as Meta;

const Template: Story<ChatProps> = (args) => <Chat {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  messages: [],
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
