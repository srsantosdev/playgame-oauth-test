import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f1f5f9;
    color: #212121;
  }

  button, input, body {
    font: 400 1.6rem Montserrat, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
