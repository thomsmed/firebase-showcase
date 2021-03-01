import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Highlighted } from 'utils';
import { useModeToggle, Mode } from 'providers/ModeToggleProvider';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 768px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 1024px;
    overflow: visible;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const FloatingButton = styled.button`
  transform: translatey(0px);
	animation: float 5s ease-in-out infinite;

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
      transform: translatey(-15px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
      transform: translatey(0px);
    }
  }
`;

const ThemeToggleFieldset = styled.fieldset`
  margin-left: 50px;
  transform: rotate(-5deg);
  font-size: 1.5rem;
`;

const PaperSwitchDark = styled.div`
  background: #41403e;
  color: #ffffffff;
`;

const PaperSwitchLight = styled.div`
  background: #ffffffff;
  color: rgb(65, 64, 62);
`;

const Home: React.FC = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const history = useHistory();
  const modeToggle = useModeToggle();

  useEffect(() => {
    return modeToggle.current((mode: Mode) => {
      setIsDarkMode(mode === Mode.Dark);
    });
  }, [modeToggle]);
  
  return (
    <Wrapper>
      <h2>Zero to hero with Firebase Hosting</h2>
      <DescriptionWrapper>
        <Description>A <Highlighted>Firebase</Highlighted> showcase</Description>
        <ThemeToggleFieldset className="form-group">
          <label htmlFor="paperSwitch" className="paper-switch-tile">
            <input id="paperSwitch" name="paperSwitch" type="checkbox" checked={isDarkMode} onChange={() => modeToggle.toggle()} />
            <div className="paper-switch-tile-card border">
              <PaperSwitchDark className="paper-switch-tile-card-front border background-dark">Dark</PaperSwitchDark>
              <PaperSwitchLight className="paper-switch-tile-card-back border background-light">Light</PaperSwitchLight>
            </div>
          </label>
        </ThemeToggleFieldset>
      </DescriptionWrapper>
      <FloatingButton className="btn-large" onClick={() => history.push('/slides/1')}>Let's go!</FloatingButton>
      <h4>Thomas Asheim Smedmann</h4>
    </Wrapper>
  );
}

export default Home;
