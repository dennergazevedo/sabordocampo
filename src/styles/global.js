import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none !important;
    outline: 0 !important;
    max-width: 100vw;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #f2f2f2;
    overflow-x: hidden;
  }

  body, input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
