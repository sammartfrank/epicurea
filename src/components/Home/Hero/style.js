import styled from 'styled-components';
import silvia from '../../../../assets/Libro-79 2.png';

export const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${silvia});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TextContainer = styled.div`
  width: 50%;
  color: white;
  font-family: ${(props) => props.theme.fonts[1]};
  font-style: regular;
  font-weight: regular;
  font-size: 16px;
  text-align: center;
`;
