import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.main`
  width: 100%;
`;
const Main = ({ children }) => {
  return <Layout>{children}</Layout>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
