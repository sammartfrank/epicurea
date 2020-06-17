import React from 'react';
import { HeroContainer } from '../../../Home/Hero/style';
import eventos from '../../../../../assets/eventos.png';

const HeroEventos = () => {
  return (
    <HeroContainer>
      <img src={eventos} alt="eventos" />
    </HeroContainer>
  );
};

export default HeroEventos;
