import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div`
  font-family: ${(props) => props.theme.fonts[1]};
  position: relative;
`;

const IntroWordingContainer = styled.div`
  width: 70%;
  line-heigh: ${(props) => props.theme.fontStyle.WordingLineHeight};
`;

const DummyImage = styled.div`
  width: 200px;
  height: 350px;
  background: grey;
  position: absolute;
  top: -100px;
  left: 112px;
  z-index: -2;
`;

const Intro = () => {
  return (
    <IntroContainer>
      <IntroWordingContainer>
        <p>
          30 años de perfeccionamiento, elaborando los platos más sabrosos,
          frescos y con la mejor calidad.
        </p>
        <p>
          Nuestra trayectoria nos dan hoy la confianza de muchas de las
          instituciones y empresas más reconocidas del país.
        </p>
      </IntroWordingContainer>
      <DummyImage />
    </IntroContainer>
  );
};
export default Intro;
