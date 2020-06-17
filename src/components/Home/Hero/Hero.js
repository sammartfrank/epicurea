import React from 'react';

import logo from '../../../../assets/logo.png';
import { HeroContainer, TextContainer } from './style';

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
