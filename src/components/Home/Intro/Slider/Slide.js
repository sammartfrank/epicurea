import React, { memo } from 'react';
import styled from 'styled-components';

const SlideContainer = styled.div`
  border: 1px solid blue;
  height: 100px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

const Slide = ({ content, width }) => {
  const style = {
    width: `${width}px`,
    backgroundImage: `url(${content})`,
  };

  return <SlideContainer style={style} />;
};

export default memo(Slide);
