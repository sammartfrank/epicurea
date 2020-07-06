import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      const Axo = window.scrollY;
      setScrolled(Axo > 750);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <HeaderContainer ref={ref}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </HeaderContainer>
  );
};

export default Header;
