import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import Message from './Message';
import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  max-width: 568px;
`;

export interface ChatProps {
  user: firebase.User;
  messages: Message[];
  botIsThinking: boolean;
  postMessage: (message: Message) => void;
}

const Chat: React.FC<ChatProps> = ({ user, messages, botIsThinking, postMessage }) => {
  return (
    <Wrapper>
      <ChatMessageList user={user} messages={messages} botIsThinking={botIsThinking} />
      <ChatInput postMessage={postMessage} />
    </Wrapper>
  );
}

export default Chat;
