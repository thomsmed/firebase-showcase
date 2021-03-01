import React from 'react';
import 'animate.css';

interface AnimatedProps {
  animationIn?: string;
  animationOut?: string;
  animationInDelay?: number;
  animationOutDelay?: number;
  animationInDuration?: number;
  animationOutDuration?: number;
  isVisible?: boolean;
}

const Animated: React.FC<AnimatedProps> = ({
  children,
  animationIn,
  animationOut,
  animationInDelay,
  animationOutDelay,
  animationInDuration,
  animationOutDuration,
  isVisible = true,
}) => {
  if (!React.isValidElement(children)) {
    throw new Error('<Animated> supports only a single valid child React element');
  }

  const delay = isVisible
    ? animationInDelay && !isNaN(animationInDelay) && `${animationInDelay}s`
    : animationOutDelay && !isNaN(animationOutDelay) && `${animationOutDelay}s`

  const duration = isVisible
    ? animationInDuration && !isNaN(animationInDuration) && `${animationInDuration}s`
    : animationOutDuration && !isNaN(animationOutDuration) && `${animationOutDuration}s`

  const animation = isVisible
    ? (
      animationIn
        ? `animate__${animationIn} ${delay && 'animate__delay-1s'}`
        : ''
    )
    : (
      animationOut
        ? `animate__${animationOut} ${delay && 'animate__delay-1s'}`
        : ''
    )
  
  const style: any = {};
  if (delay) {
    style['--animate-delay'] = delay;
  }

  if (duration) {
    style['--animate-duration'] = duration;
  }

  const clone = React.cloneElement(children, {
    className: `${children.props.className} animate__animated ${animation}`,
    style: {
      ...children.props.style,
      ...style
    }
  });

  return clone;
}

export default Animated;
