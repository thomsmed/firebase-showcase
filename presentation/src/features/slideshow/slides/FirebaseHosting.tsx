import React from 'react';
import BaseSlide from './BaseSlide';
import { FlexBox, ImageFlexBox } from '../utils';
import hostingImg from '../assets/hosting.png';
import logoBuiltWhiteImg from '../assets/logo-built-white.svg';
import hostingReleasesImg from '../assets/hosting-releases.png';
import hostingExampleImg from '../assets/hosting-example.png';
import { Animated } from 'animation';

const FirebaseHosting = () => {
  return (
    <BaseSlide>
      <FlexBox>
        <FlexBox basis={40} vertical={true}>
          <ImageFlexBox basis={40} rotation={-5}>
            <Animated animationIn="fadeIn" animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={hostingImg} />
            </Animated>
          </ImageFlexBox>
          <ImageFlexBox basis={60} rotation={2}>
            <Animated animationIn="fadeIn" animationInDelay={0.6} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={logoBuiltWhiteImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
        <FlexBox basis={10} vertical={true}></FlexBox>
        <FlexBox basis={50} vertical={true}>
          <ImageFlexBox basis={60} rotation={3}>
            <Animated animationIn="fadeIn" animationInDelay={0.9} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={hostingReleasesImg} />
            </Animated>
          </ImageFlexBox>
          <ImageFlexBox basis={40} rotation={-2}>
            <Animated animationIn="fadeIn" animationInDelay={0.3} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={hostingExampleImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
      </FlexBox>
      {/* Litt om Firebase Hosting.
      Kan hoste ei eller fleire sider.
      CLI-verktøy for enkelt å publisere Web app.
      Denne presentasjonen her kjører i Firebase Hosting.
      Mekke ein badge eller noko som seier "Im running in Firebase Hosting". */}
    </BaseSlide>
  );
}

export default FirebaseHosting;
