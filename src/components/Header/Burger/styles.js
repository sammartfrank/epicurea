import styled from 'styled-components';

export const BarContainer = styled.button`
  position: ${({ open }) => (open ? 'fixed' : 'absolute')};
  top: 3%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
    transition: all 200ms linear;
    position: relative;
    transform-origin: 1px;
  }
  div:nth-child(2) {
    align-self: flex-end;
    width: 70%;
  }
  div:first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(-20px)' : 'translateX(0)')};
  }

  div:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
