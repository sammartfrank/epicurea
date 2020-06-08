import React from 'react';
import styled from 'styled-components';

import logo from '../../../../assets/logo.png';

const HeroContainer = styled.div`
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: grey;
`;

const TextContainer = styled.div`
  width: 50%;
  color: white;
  font-family: ${(props) => props.theme.fonts[1]};
  font-style: regular;
  font-weight: regular;
  font-size: 16px;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <img src={logo} alt="Epicurea" />
      <TextContainer>
        <h5>
          El catering de la cheff <br />
          Silvia Barredo.
        </h5>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
