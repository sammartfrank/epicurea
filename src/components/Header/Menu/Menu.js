import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  width: 100%;
  background: white;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <Link to="/">Home</Link>
      <Link to="/contacto">Nosotros</Link>
      <Link to="/eventos">Catering</Link>
      <Link to="/contacto">Contacto</Link>
    </MenuContainer>
  );
};

export default Menu;
