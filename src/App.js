import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Header from './components/Header/Header';
import Theme from './components/Theme/Theme';
import Error404 from './components/Error404/Error404';
import * as Routes from './constants/routes';

const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: ${(props) => props.theme.fonts[1]}
    font-size: 16px;
  }
`;

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Main>
        <Header />
        <Router>
          <Switch>
            <Route path={Routes.HOME} exact component={Home} />
            <Route path="*" exact component={Error404} />
            {/* <Route path={Routes.FIESTAS} exact component={<Fiestas />} />
            <Route path={Routes.EMPRESAS} exact component={<Empresas />} />
            <Route path={Routes.REUNIONES} exact component={<Reuniones />} /> */}
          </Switch>
        </Router>
      </Main>
    </Theme>
  );
};

export default App;
