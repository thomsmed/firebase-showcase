import React from 'react';
import styled from 'styled-components';

interface FlexBoxProps {
  vertical?: boolean;
  basis?: number;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 ${({ basis }) => !basis || isNaN(basis) ? 'auto' : `${basis}%`};
  
  @media (min-width: 1024px) {
    flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
  }
`;

export default FlexBox;
