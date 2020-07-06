import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border-bottom-right-radius: 15%;
  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  top: 0;
  width: 100%;
  min-height: 100vh;
  left: 0;
  padding: 2rem;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  transition: all 350ms ease-in-out;
  z-index: 9;
  a {
    color: ${(props) => props.theme.colors.primary};
    font-size: 26px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    font-family: ${({ theme }) => theme.fonts[1]};
    text-decoration: none;
    transition: all 140ms ease-in-out;
    transition-delay: 15ms;
    transform: ${({ open }) => (open ? 'translateY(-10%)' : 'translateY(0)')};
    opacity: ${({ open }) => (open ? '1' : '0')};
  }
  a:first-child {
    transition-delay: 400ms;
  }
  a:nth-child(1) {
    transition-delay: 600ms;
  }
  a:nth-child(2) {
    transition-delay: 700ms;
  }
  a:nth-child(3) {
    transition-delay: 800ms;
  }
  a:nth-child(4) {
    transition-delay: 900ms;
  }
`;
