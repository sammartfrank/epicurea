import React from 'react';
import styled from 'styled-components';
import loguito from '../../../assets/loguito.png';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  padding: 12px;
  display: flex;
  position: absolute;
  top: -70px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: white;
`;

const MenuContainer = styled.div``;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={loguito} alt="loguito" />
      <MenuContainer>The menu</MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
