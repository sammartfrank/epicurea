import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FootContainer = styled.div`
  width: 100%;
  height: 35px;
  background: #c4c4c4;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  color: white;
`;

const Footer = ({ email }) => {
  return (
    <FootContainer>
      <div>{email}</div>
      <div>Social Media</div>
    </FootContainer>
  );
};

Footer.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Footer;
