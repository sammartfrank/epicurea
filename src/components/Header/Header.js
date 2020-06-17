import React from 'react';
import styled from 'styled-components';
// import loguito from '../../../assets/loguito.png';
import pinklogo from '../../../assets/pinklogo.png';
import Burger from './Burger/Burger';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  padding: 24px;
  display: flex;
  position: fixed;
  z-index: 2;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={pinklogo} alt="logo" />
      <Burger />
    </HeaderContainer>
  );
};

export default Header;
