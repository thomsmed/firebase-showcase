import { Animated } from 'animation';
import React from 'react';
import styled from 'styled-components';
import { Color } from 'utils';
import BaseSlide from './BaseSlide';

const Wrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ListHeader = styled.h4`
  margin-bottom: 0;
`;

const LinkList = styled.ul`
  li {
    margin: 10px;
  }
`;

const Footer = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const HighlightedLink = styled.a`
  color: ${Color.SecondaryLight};
  
  :visited {
    color: ${Color.SecondaryLight};
  }
`;

const ResourceLink = styled.a`
  margin: 10px;
  font-weight: bold;
  background: none;
  text-decoration: underline;
  color: ${({ color }) => color};

  :visited {
    color: ${({ color }) => color};
  }
`;

const LastWords = () => {
  return (
    <BaseSlide>
      <Wrapper>
        <Animated animationIn="fadeIn" animationInDuration={0.5} isVisible={true}>
          <h2>Thank you!</h2>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay={0.3} animationInDuration={0.5} isVisible={true}>
          <ListHeader>Links and stuff</ListHeader>
        </Animated>
        <Animated animationIn="fadeIn" animationInDelay={0.3} animationInDuration={0.5} isVisible={true}>
          <LinkList>
            <li>This Presentation: <HighlightedLink href="https://firecase.thomsmed.com/">https://firecase.thomsmed.com/</HighlightedLink></li>
            <li>GitHub: <HighlightedLink href="https://github.com/thomsmed/firebase-showcase">https://github.com/thomsmed/firebase-showcase</HighlightedLink></li>
            <li>Firebase: <HighlightedLink href="https://firebase.google.com/">https://firebase.google.com/</HighlightedLink></li>
            <li>Firebase on YouTube: <HighlightedLink href="https://www.youtube.com/user/Firebase">https://www.youtube.com/user/Firebase</HighlightedLink></li>
          </LinkList>
        </Animated>
        <Footer>
          <Animated animationIn="zoomIn" animationInDelay={0.6} animationInDuration={0.5} isVisible={true}>
            <p>
              A <ResourceLink color={Color.ReactBlue} href="https://reactjs.org/">React</ResourceLink>
              app made with
              <ResourceLink color={Color.FirebaseLight} href="https://firebase.google.com/">Firebase</ResourceLink>,
              <ResourceLink color={Color.PaperCssDark} href="https://www.getpapercss.com/">Paper.css</ResourceLink>
              and
              <ResourceLink color={Color.AnimateCssMedium} href="https://animate.style/">Animate.css</ResourceLink>
            </p>
          </Animated>
        </Footer>
      </Wrapper>
    </BaseSlide>
  );
}

export default LastWords;
