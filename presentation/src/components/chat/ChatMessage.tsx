import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import Message from './Message';
import robotImg from './assets/robot.svg';
import userImg from './assets/user.svg';
import { Animated } from 'animation';
import { Color } from 'utils';

interface BubbleProps {
  isBot: boolean;
}

const Wrapper = styled.div<BubbleProps>`
  display: flex;
  justify-content: ${({ isBot }) => isBot ? 'flex-start' : 'flex-end'};
  padding: 5px;
`;

const Bubble = styled.div<BubbleProps>`
  background-color: ${({ isBot }) => isBot ? Color.AlertWarningLight : Color.AlertSecondaryLight};
  color: ${({ isBot }) => isBot ? Color.TextDark : Color.TextDark};
  border-radius: 5px;
  max-width: 70%;
  padding: 5px;
  align-self: center;
  order: 1;
`;

const BubbleImage = styled.img`
  border: none;
  border-radius: 5px;
`;

interface AvatarProps extends BubbleProps {
  imageUrl: string | null;
}

const Avatar = styled.div<AvatarProps>`
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-size: contain;
  background-color: ${({ isBot }) => isBot ? Color.AlertWarningLight : Color.AlertSecondaryLight};
  order: ${({ isBot }) => isBot ? 0 : 2};
`;

export interface ChatMessageProps {
  user: firebase.User;
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps>  = ({ user, message }) => {
  const messageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollMessageIntoView();
  }, [user, message]);

  const scrollMessageIntoView = () => {
    if (!messageRef.current) {
      return;
    }

    messageRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Wrapper ref={messageRef} isBot={message.bot}>
      <Avatar isBot={message.bot} imageUrl={message.bot ? robotImg : user.photoURL || userImg}></Avatar>
      <Animated animationIn={message.bot ? 'fadeInLeft' : 'fadeInRight'} animationInDuration={0.3} isVisible={true}>
        <Bubble isBot={message.bot}>
          <span>{message.body}</span>
          { message.img && <BubbleImage onLoad={scrollMessageIntoView} src={message.img} />}
        </Bubble>
      </Animated>
    </Wrapper>
  );
}

export default ChatMessage;
