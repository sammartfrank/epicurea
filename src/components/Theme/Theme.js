import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    text: '16px',
    title: '26px',
    small: '1em',
    medium: '2em',
    large: '2.5em',
  },
  fontStyle: {
    HeadingLineHeight: '30px',
    WordingLineHeight: '19px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
