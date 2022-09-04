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

    font-family: 'roboto', sans-serif;

  }

  body{
    font-family: 'roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 1200px) {
   html{
    font-size: 80%;
   } 
  }

  /* @media (max-width: 960px){
    html{
    font-size: 62.5%;
   } 
  } */
`
