import React from 'react';
import styled from 'styled-components';
import Section from '../Layout/Section';
import Hero from './Hero/Hero';
import Intro from './Intro/Intro';
import Nexo from './Nexo/Nexo';
import Contacto from './Contacto/Contacto';
import Slider from './Intro/Slider/Slider';

import images from './Intro/Slider/slides';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Section heading="Buscamos el placer y el disfrute en todo lo que hacemos.">
        <Intro />
        <Slider slides={images} autoPlay />
      </Section>
      <Section heading="Para cada ocasión hay Epicurea!">
        <Nexo />
      </Section>
      <Section heading="Contactanos!">
        <Contacto />
      </Section>
    </HomeContainer>
  );
};

export default Home;
