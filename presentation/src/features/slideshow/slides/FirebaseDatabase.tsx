import React from 'react';
import BaseSlide from './BaseSlide';
import { FlexBox, ImageFlexBox } from '../utils';
import databaseImg from '../assets/database.png';
import databaseExampleImg from '../assets/database-example.png';
import databaseStructureImg from '../assets/database-structure.png';
import { Animated } from 'animation';

const FirebaseDatabase = () => {
  return (
    <BaseSlide>
      <FlexBox>
        <FlexBox basis={40} vertical={true}>
          <ImageFlexBox basis={40} rotation={5}>
            <Animated animationIn="fadeIn" animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={databaseImg} />
            </Animated>
          </ImageFlexBox>
          <ImageFlexBox basis={60} rotation={2}>
            <Animated animationIn="fadeIn" animationInDelay={0.3} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={databaseExampleImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
        <FlexBox basis={60} vertical={true}>
          <ImageFlexBox rotation={-5}>
            <Animated animationIn="fadeIn" animationInDelay={0.6} animationInDuration={0.5} isVisible={true}>
              <img className="shadow" src={databaseStructureImg} />
            </Animated>
          </ImageFlexBox>
        </FlexBox>
      </FlexBox>
      {/* Realtime Database VS Cloud Firestore.
      NoSQL database - lett å pushe vilkårlig data til databasen. Nevne Database Rules?
      Begge har realtime egenskap.
      Kan lytte på endringar i database, og agere der etter.
      Lede ann til neste slide om Firebase Functions? */}
    </BaseSlide>
  );
}

export default FirebaseDatabase;
