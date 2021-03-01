import React, { useEffect } from 'react';
import {
  Redirect,
  useParams,
  useHistory,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import slides from './slides';
import { Color } from 'utils/Colors';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 768px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 1024px;
    overflow: visible;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  min-width: 115px;
`;

const StyledLink = styled(Link)`
  min-width: 115px;
  color: ${Color.SecondaryLight};
  
  :visited {
    color: ${Color.SecondaryLight};
  }
`;

interface SlideshowParams {
  slide?: string | undefined;
}

interface SlideshowProps {
  pathTo: (slide: number) => string;
}

const Slideshow: React.FC<SlideshowProps> = ({ pathTo }) => {
  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'ArrowLeft' && slideNr > 1) {
        history.push(pathTo(slideNr - 1));
      }
      if (event.code === 'ArrowRight' && slideNr < numbOfPages) {
        history.push(pathTo(slideNr + 1));
      }
    };
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  });
  const history = useHistory();
  const { slide } = useParams<SlideshowParams>();
  const slideNr = parseInt(slide || '');

  const numbOfPages = slides.length;

  if (isNaN(slideNr) || slideNr < 1) {
    return <Redirect to={pathTo(1)} />
  } else if (slideNr > numbOfPages) {
    return <Redirect to={pathTo(numbOfPages)} />
  }

  const Page = slides[slideNr - 1];

  return (
    <Wrapper>
      <Page />
      <Controls>
        {
          slideNr > 1
            ? <Button className="margin" onClick={() => history.push(pathTo(slideNr - 1))}>Previous</Button>
            : <StyledLink to="/" className="margin">{'<'} Back to start</StyledLink>
        }
        <p>
          {`${slide} / ${numbOfPages}`}
        </p>
        {
          slideNr < numbOfPages
            ? <Button className="margin" onClick={() => history.push(pathTo(slideNr + 1))}>Next</Button>
            : <StyledLink to="/" className="margin">Back to start {'>'}</StyledLink>
        }
      </Controls>
    </Wrapper>
  );
}

export default Slideshow;
