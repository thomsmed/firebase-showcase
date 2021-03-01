import React from 'react';
import BaseSlide from './BaseSlide';
import { FlexBox, ImageFlexBox } from '../utils';
import authenticationImg from '../assets/authentication.png';
import authenticationExampleImg from '../assets/authentication-example.png';
import authenticationProvidersImg from '../assets/authentication-providers.png';
import { Animated } from 'animation';

const FirebaseAuth = () => {
  return (
    <BaseSlide>
      <FlexBox>
        <FlexBox basis={40} vertical={true}>
          <ImageFlexBox basis={40} rotation={5}>
            <Animated animationIn="fadeIn" animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={authenticationImg} />
            </Animated>
          </ImageFlexBox>
          <ImageFlexBox basis={60} rotation={2}>
            <Animated animationIn="fadeIn" animationInDelay={0.6} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={authenticationExampleImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
        <FlexBox basis={60} vertical={true}>
          <ImageFlexBox rotation={-5}>
            <Animated animationIn="fadeIn" animationInDelay={0.3} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={authenticationProvidersImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
      </FlexBox>
      {/* Komplett innlogging med ferdig UI (FirebaseUI).
      Administrer brukarar i Firebase Console (eller via API).
      Enkelt å integrere mot tredjeparts auth providers. */}
    </BaseSlide>
  );
}

export default FirebaseAuth;
