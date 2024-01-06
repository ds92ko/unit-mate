import React from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Router from '../router';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
