import React from 'react';
import styled from 'styled-components';

interface ImageFlexBoxProps {
  basis?: number;
  rotation?: number;
}

const ImageFlexBox = styled.div<ImageFlexBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex: 0 1 ${({ basis }) => !basis || isNaN(basis) ? 'auto' : `${basis}%`};
  transform: rotate(${({ rotation }) => !rotation || isNaN(rotation) ? 0 : rotation}deg);
`;

export default ImageFlexBox;
