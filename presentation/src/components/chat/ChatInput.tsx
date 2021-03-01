import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import '@material/mwc-icon';
import Message from './Message';
import { Animated } from 'animation';

const Wrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;

const Input = styled.input`
  flex: 1 0 auto;
`;

const SendButton = styled.button`
  padding: .8em 1em;
  border-top-left-radius: 185px 160px;
  border-top-right-radius: 200px 195px;
  border-bottom-right-radius: 160px 195px;
  border-bottom-left-radius: 185px 190px;
  margin-left: 1em;
`;

export interface ChatInputProps {
  postMessage: (message: Message) => void
}

const ChatInput: React.FC<ChatInputProps> = ({ postMessage }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Wait until animation is done, then focus input.
    window.setTimeout(() => {
      if (!inputRef.current) {
        return;
      }
  
      inputRef.current.focus();
    }, 1000);
  }, [window]);

  const onClick = () => {
    if (!inputRef.current || !inputRef.current.value) {
      return;
    }

    postMessage({
      body: inputRef.current.value,
      bot: false,
    });
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      onClick();
    }
  }

  return (
    <Wrapper>
      <Animated animationIn="zoomIn" animationInDuration={0.5} isVisible={true}>
        <Input type="text" className="shadow shadow-small" ref={inputRef} placeholder="Message" onKeyDown={onKeyDown} />
      </Animated>
      <Animated animationIn="zoomIn" animationInDuration={0.5} animationInDelay={0.1} isVisible={true}>
        <SendButton onClick={onClick}>
          {/* @ts-ignore */}
          <mwc-icon>send</mwc-icon>
        </SendButton>
      </Animated>
    </Wrapper>
  );
}

export default ChatInput;
