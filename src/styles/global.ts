import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* RESET PADRÃO */
  :root{
  --white: #fff;

  --background: #191919;
  
  --gray-100: #F2F2F2;
  --gray-200: #D9D9D9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1A1A1A;
  --gray-700: #0D0D0D;

  --purple: #8284FA;
  --purple-dark: #5E60CE;

  --blue: #4EA8DE; 
  --blue-dark: #1E6F9F;

  --danger: #E25858;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  }

  html{
    font-size: 62.5%;
    @media (max-width: 768px) {
    font-size:87.5%
  }
  }

  body{
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--gray-100);
    font-size: 1.4rem;
  }

  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight:  400;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

/* RESET PADRÃO */
`;
