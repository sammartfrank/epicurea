import React from 'react';
import styled from 'styled-components';
import Section from '../Layout/Section';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';
import Nexo from './Nexo/Nexo';
import Contacto from './Contacto/Contacto';

const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Section heading="Elaboramos sabores frescos con ingredientes de primera calidad.">
        <Intro />
      </Section>
      <Section heading="Para cada ocasión hay Epicurea!">
        <Nexo />
      </Section>
      <Section heading="Contactanos">
        <Contacto />
      </Section>
    </HomeContainer>
  );
};

export default Home;
