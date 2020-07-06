import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  border: 1px solid green;
`;

const SliderContent = ({ translate, transition, width, children }) => {
  const style = {
    transform: `translateX(-${translate}px)`,
    transition: `transform ease-out ${transition}s`,
    width: `${width}px`,
  };
  return <SliderContainer style={style}>{children}</SliderContainer>;
};

SliderContent.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default SliderContent;
