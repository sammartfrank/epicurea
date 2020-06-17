import styled from 'styled-components';

export const NexoContainer = styled.div`
  min-height: 100%;
  width: 100%;
  font-family: ${(props) => props.theme.fonts[1]};
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
`;

export const NodyContainer = styled.div`
  margin: 24px 0px 24px 0px;
`;

export const NodeeContainer = styled.div`
  border-bottom: 2px solid #e6327d;
  margin: 5px 0px 5px 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0px 5px 0px;
  text-decoration: none;
`;

export const NexoWording = styled.p`
  width: 70%;
  margin: 5px 0px 5px 0px;
`;
