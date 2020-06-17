import React from 'react';
import styled from 'styled-components';

import HeroEventos from './HeroEventos/HeroEventos';

const FiestasContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Fiestas = () => {
  return (
    <FiestasContainer>
      <HeroEventos />
    </FiestasContainer>
  );
};

export default Fiestas;
