import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
`;

const HeadingContainer = styled.h1`
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: ${(props) => props.theme.fontSizes.title};
  line-height: ${(props) => props.theme.fontStyle.HeadingLineHeight};
  width: 75%;
  font-weight: 900;
  text-align: left;
  padding-left: 24px;
  margin-bottom: 14px;
`;

const Section = ({ children, heading }) => {
  return (
    <SectionContainer>
      <HeadingContainer>{heading}</HeadingContainer>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Section;
