import React from 'react';
import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { MenuContainer } from './styles';

const paths = [
  { path: '/', name: 'HOME' },
  { path: '/nosotros', name: 'NOSOTROS' },
  { path: '/catering', name: 'CATERING' },
  { path: '/contacto', name: 'CONTACTO' },
];

const activeStyle = {
  borderBottom: `1px solid #E6327D`,
};

const Menu = ({ open }) => {
  return (
    <MenuContainer open={open}>
      {paths.map((el) => {
        return (
          <NavLink key={el.path} to={el.path} activeStyle={activeStyle}>
            {el.name}
          </NavLink>
        );
      })}
    </MenuContainer>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
