import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  button, input {
    background: transparent;
    border: 0;
    outline: none;
  }

  body{
    font-family: 'roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};

  }
`
