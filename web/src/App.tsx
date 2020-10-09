import React from 'react';

import Login from './pages/Login';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
};

export default App;
