import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AiOutlineRight } from 'react-icons/ai';

const NexoContainer = styled.div`
  min-height: 120vh;
  width: 100%;
  font-family: ${(props) => props.theme.fonts[1]};
  text-align: left;
`;

const NexoWording = styled.p`
  width: 70%;
  margin: 5px 0px 5px 0px;
`;

const mockList = [
  { id: 1, name: 'Fiestas y eventos' },
  { id: 2, name: 'Reuniones Empresariales' },
  { id: 3, name: 'Reuniones Informales' },
  { id: 4, name: 'Comedores' },
  { id: 5, name: 'Tortas' },
];

const NodeeContainer = styled.div`
  border-bottom: 2px solid black;
  margin: 5px 0px 5px 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px 5px 0px;
`;

const Nodee = ({ name }) => {
  return (
    <NodeeContainer>
      <>{name}</>
      <>
        <AiOutlineRight />
      </>
    </NodeeContainer>
  );
};

const Nexo = () => {
  return (
    <NexoContainer>
      <NexoWording>
        Encontrá debajo nuestros servicios y encontrá el menú perfecto para tus
        celebraciones.
      </NexoWording>
      {mockList.map((e) => (
        <Nodee name={e.name} key={e.id} />
      ))}
    </NexoContainer>
  );
};

Nodee.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Nexo;
