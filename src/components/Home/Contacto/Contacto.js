import React from 'react';
import styled from 'styled-components';

import EpicuForm from './Form';

const ContactoContainer = styled.div`
  min-height: 120vh;
  font-family: ${(props) => props.theme.fonts[1]};
  padding: 0px 24px 0px 24px;
`;

const ContactoWording = styled.p`
  width: 100%;
`;

const Contacto = () => {
  return (
    <ContactoContainer>
      <ContactoWording>
        ¿Querés hacer un pedido o pedir presupuesto para tu evento? Completá el
        formulario y te contactaremos a la brevedad
      </ContactoWording>
      <EpicuForm />
    </ContactoContainer>
  );
};

export default Contacto;
