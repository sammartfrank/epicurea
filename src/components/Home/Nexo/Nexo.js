import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  NodeeContainer,
  NexoContainer,
  NodyContainer,
  NexoWording,
} from './styles';
import * as Routes from '../../../constants/routes';

const mockList = [
  { id: 1, name: 'Fiestas y eventos', path: Routes.FIESTAS },
  { id: 2, name: 'Reuniones Empresariales', path: Routes.EMPRESAS },
  { id: 3, name: 'Reuniones Informales', path: Routes.REUNIONES },
  { id: 4, name: 'Comedores', path: Routes.COMEDORES },
  { id: 5, name: 'Tortas', path: Routes.TORTAS },
];

export const Nodee = ({ name }) => {
  return (
    <NodeeContainer>
      <>{name}</>
      <>
        <AiOutlineRight style={{ color: ' #FF0099' }} />
      </>
    </NodeeContainer>
  );
};

const Nexo = () => {
  return (
    <NexoContainer>
      <NexoWording>
        Encontrá debajo nuestros servicios y elegí el menú perfecto para cada
        tipo de evento.
      </NexoWording>
      <NodyContainer>
        {mockList.map((e) => (
          <Link to={e.path} style={{ textDecoration: 'none', color: 'black' }}>
            <Nodee name={e.name} key={e.id} />
          </Link>
        ))}
      </NodyContainer>
    </NexoContainer>
  );
};

Nodee.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Nexo;
