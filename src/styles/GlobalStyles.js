import { createGlobalStyle } from 'styled-components';
import font from '../fonts/Manrope-VariableFont.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-weight: 400;
    font-style: normal;
    src: url(${font}) format('truetype');
}
@font-face {
    font-family: 'Manrope';
    font-weight: 500;
    font-style: normal;
    src: url(${font}) format('truetype');
}
@font-face {
    font-family: 'Manrope';
    font-weight: 600;
    font-style: normal;
    src: url(${font}) format('truetype');
}

body{
font-family: 'Manrope', sans-serif;
background-color: rgb(243, 243, 242);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
  padding: 0;
}

img, svg {
  display: block;
  max-width: 100%;
  height: auto;
}
  `;
