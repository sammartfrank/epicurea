import React from 'react';
import { bool, func } from 'prop-types';
import { BarContainer } from './styles';

const Burger = ({ open, setOpen }) => {
  return (
    <BarContainer open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BarContainer>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
