import styled from 'styled-components';
import silvita from '../../../../assets/silvia1.png';
import foodie from '../../../../assets/Silvia_3 1.png';

export const IntroContainer = styled.div`
  font-family: ${(props) => props.theme.fonts[1]};
  position: relative;
  padding-left: 24px;
`;

export const IntroWordingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  span {
    // line-height: ${(props) => props.theme.fontStyle.WordingLineHeight};
    line-height: 50px;
    background: white;
    margin: 39px 0px;
  }
`;

export const DummyImage = styled.div`
  width: 70%;
  min-height: 100vh;
  background-image: url(${foodie});
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const ReadButton = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-item: center;
  font-weight: 900;
  padding: 5px 0px 15px 0px;
  border-bottom: 2px solid #e6327d;
`;

export const Divider = styled.div`
  width: 10%;
  border: 1px solid black;
  margin-bottom: 20px;
`;
