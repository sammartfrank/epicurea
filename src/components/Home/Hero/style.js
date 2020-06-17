import styled from 'styled-components';

export const HeroContainer = styled.div`
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: grey;
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
