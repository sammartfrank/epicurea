import React from 'react';

import { HeroContainer, TextContainer } from './style';

import logo from '../../../../assets/pinky.png';

const Hero = () => {
  return (
    <HeroContainer>
      <img src={logo} alt="Epicurea" />
      <TextContainer>
        <h4>
          El catering de la cheff <br />
          <strong>Silvia Barredo.</strong>
        </h4>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
