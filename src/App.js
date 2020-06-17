import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Theme from './components/Theme/Theme';
import Error404 from './components/Error404/Error404';
import * as Routes from './constants/routes';
import Fiestas from './components/Servicios/Fiestas/Fiestas';

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts[1]}
    font-size: 16px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Main>
        <Router>
          <Switch>
            <Route path={Routes.HOME} exact component={Home} />
            <Route path={Routes.FIESTAS} component={Fiestas} />
            <Route path="*" exact component={Error404} />
            {/* 
            <Route path={Routes.EMPRESAS} exact component={<Empresas />} />
            <Route path={Routes.REUNIONES} exact component={<Reuniones />} /> */}
          </Switch>
        </Router>
      </Main>
      <Footer email="mail@mailmail.com" />
    </Theme>
  );
};

export default App;
