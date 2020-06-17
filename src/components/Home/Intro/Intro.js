import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import {
  IntroContainer,
  IntroWordingContainer,
  DummyImage,
  ReadButton,
} from './styles';

const anchorStyle = {
  color: 'black',
  textDecoration: 'none',
};

const Intro = () => {
  return (
    <IntroContainer>
      <IntroWordingContainer>
        <p>
          Y con cada cliente, esa búsqueda siempre está protagonizada por
          <br />
          <strong>sabores frescos con ingredientes de primera calidad.</strong>
        </p>
        <p>
          Es lo que hoy nos da la confianza de muchas de las instituciones y
          empresas más reconocidas del país. Con ese expertise te garantizamos
          el momento de disfrute que estás buscando en cada comida.
          <br />
          <strong>Somos epicureísmo.</strong>
        </p>
      </IntroWordingContainer>
      <ReadButton>
        <a
          href="https://www.silviabarredo.com"
          target="_blank"
          rel="noreferrer"
          style={anchorStyle}
        >
          Leer Mas
        </a>
        <AiOutlineRight style={{ color: ' #FF0099' }} />
      </ReadButton>
      <DummyImage />
    </IntroContainer>
  );
};
export default Intro;
