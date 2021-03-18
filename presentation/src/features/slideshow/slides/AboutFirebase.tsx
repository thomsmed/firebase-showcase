import React from 'react';
import styled from 'styled-components';
import BaseSlide from './BaseSlide';
import { FlexBox, ImageFlexBox } from '../utils';
import logoStandardImg from '../assets/logo-standard.svg';
import createProject from '../assets/create-project.png';
import { Animated } from 'animation';
import { Highlighted } from 'utils';

const AboutWrapper = styled(FlexBox)`
  justify-content: flex-start;
  padding: 20px 20px 0 20px;
`;

const LogoWrapper = styled(ImageFlexBox)`
  justify-content: flex-start;
`;

const Logo = styled.img`
  max-width: 50%;
  padding: 10px;
  background-color: #ffffffff;
`;

const Header = styled.h2`
  margin-bottom: 0;
`;

const SubHeader = styled.h4`
  margin-top: 0;
  padding-left: 20px;
`;

const AboutFirebase = () => {
  return (
    <BaseSlide>
      <FlexBox>
        <AboutWrapper basis={60} vertical={true}>
          <LogoWrapper rotation={-5}>
            <Animated animationIn="fadeIn" animationInDuration={0.5} isVisible={true}>
              <Logo className="shadow" src={logoStandardImg} />
            </Animated>
          </LogoWrapper>
          <FlexBox>
            <Animated animationIn="fadeIn" animationInDuration={0.5} animationInDelay={0.3} isVisible={true}>
              <div>
                <Header>What's it all about?</Header>
                <SubHeader>{'>'} From a <Highlighted>front-end developer's perspective</Highlighted></SubHeader>
                <ul>
                  <li><Highlighted>Complete back end solution</Highlighted> for your apps (Web/iOS/Android)</li>
                    <ul>
                      <li><Highlighted>Easy</Highlighted> to integrate into your apps (almost no configuration required)</li>
                      <li><Highlighted>Free</Highlighted> to get started (just create a Firebase Project and you're good to go!)</li>
                    </ul>
                  <li><Highlighted>Loads of services</Highlighted> to choose from and utilize in your apps</li>
                    <ul>
                      <li>Hosting (<Highlighted>host your HTML, CSS and JavaScript</Highlighted>)</li>
                      <li>Authentication (with <Highlighted>out of the box login/signup UI</Highlighted>)</li>
                      <li>Database (with <Highlighted>realtime data sync!</Highlighted>)</li>
                      <li>Functions (<Highlighted>server side JavaScript</Highlighted>)</li>
                      <li>And allot more!</li>
                    </ul>
                  <li><Highlighted>Rich tools, SDKs and libraries</Highlighted></li>
                    <ul>
                      <li>Only need to know <Highlighted>basic JavaScript</Highlighted> and be comfortable using <Highlighted>command line tools</Highlighted></li>
                    </ul>
                </ul>
              </div>
            </Animated>
          </FlexBox>
        </AboutWrapper>
        <FlexBox basis={40} vertical={true}>
          <ImageFlexBox basis={40} rotation={5}>
            <Animated animationIn="fadeIn" animationInDuration={0.5} animationInDelay={0.6} isVisible={true}>
              <img className="shadow" src={createProject} />
            </Animated>
          </ImageFlexBox>
          <FlexBox basis={60}>
            
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </BaseSlide>
  );
}

export default AboutFirebase;
