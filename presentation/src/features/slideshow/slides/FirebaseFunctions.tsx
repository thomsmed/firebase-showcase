import React from 'react';
import BaseSlide from './BaseSlide';
import { FlexBox, ImageFlexBox } from '../utils';
import fuctionsImg from '../assets/functions.png';
import functionsTriggersImg from '../assets/functions-triggers.png';
import functionsExampleImg from '../assets/functions-example.png';
import { Animated } from 'animation';

const FirebaseFunctions = () => {
  return (
    <BaseSlide>
      <FlexBox vertical={true}>
        <FlexBox basis={50}>
          <ImageFlexBox basis={40} rotation={-5}>
            <Animated animationIn="fadeIn" animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={fuctionsImg} />
            </Animated>
          </ImageFlexBox>
          <ImageFlexBox basis={60} rotation={5}>
            <Animated animationIn="fadeIn" animationInDelay={0.6} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={functionsTriggersImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
        <FlexBox basis={50}>
          <ImageFlexBox basis={60} rotation={-3}>
            <Animated animationIn="fadeIn" animationInDelay={0.3} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={functionsExampleImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
      </FlexBox>
      {/* Kva er ein Functions? Kun ein snippet med javascipt kode.
      Kan triggast på mangen måtar (http, cron, etc).
      Men kanskje den kulaste triggeren er database events frå Realtime Database. */}
    </BaseSlide>
  );
}

export default FirebaseFunctions;
