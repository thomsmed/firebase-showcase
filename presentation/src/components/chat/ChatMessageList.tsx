import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import ChatMessage from "./ChatMessage";
import Message from "./Message";
import { Animated } from 'animation';

const Wrapper = styled.div`
  position: relative;
  padding: 0;
`;

const ListWrapper = styled.div`
  padding: 10px;
  height: 500px;
  overflow: scroll;
`;

const ThinkingNote = styled.h5`
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 5px;
  left: 5px;
`;

export interface ChatMessageListProps {
  user: firebase.User;
  messages: Message[];
  botIsThinking: boolean;
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({ user, messages, botIsThinking }) => {
  const chatBubbles = messages.map((message, index) => (
    <ChatMessage user={user} key={index} message={message} />)
  );

  return (
    <Wrapper className="paper">
      <ListWrapper>
        {chatBubbles}
      </ListWrapper>
      <ThinkingNote>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOutDown"
          animationInDuration={0.3}
          animationOutDuration={0.3}
          isVisible={botIsThinking}>
          <span>Chatbot is thinking...</span>
        </Animated>
      </ThinkingNote>
    </Wrapper>
  );
}

export default ChatMessageList;
