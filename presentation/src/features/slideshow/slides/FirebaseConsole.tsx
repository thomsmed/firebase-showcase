import React from 'react';
import BaseSlide from './BaseSlide';
import { FlexBox, ImageFlexBox } from '../utils';
import firebaseConsoleImg from '../assets/firebase-console.png';
import firebaseConsoleUrlImg from '../assets/firebase-console-url.png';
import { Animated } from 'animation';

const FirebaseConsole = () => {
  return (
    <BaseSlide>
      <FlexBox vertical={true}>
        <ImageFlexBox basis={10} rotation={-3}>
          <Animated animationIn="fadeIn" animationInDuration={0.5} isVisible={true}>
            <img className="shadow" src={firebaseConsoleUrlImg} />
          </Animated>
        </ImageFlexBox>
        <ImageFlexBox basis={90} rotation={3}>
          <Animated animationIn="fadeIn" animationInDelay={0.3} animationInDuration={0.5} isVisible={true}>
            <img className="shadow" src={firebaseConsoleImg} />
          </Animated>
        </ImageFlexBox>
      </FlexBox>
      {/* Litt om opretting av eit Firebase prosjekt.
      Full oversikt og administrasjon gjennom Web Portal: Firebase Console.
      Tilgang til alle tenestene som Firebase tilbyr. */}
    </BaseSlide>
  );
}

export default FirebaseConsole;
