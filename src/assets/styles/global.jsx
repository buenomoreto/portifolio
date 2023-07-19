
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Inter', sans-serif;
  }

  .App {
    background-color: #181818;
  }

  /* Reset CSS */

  /* Definir a margem e o preenchimento como 0 para todos os elementos */
  * {
    margin: 0;
    padding: 0;
  }

  /* Remover a decoração de links */
  a {
    text-decoration: none;
  }

  /* Definir a cor do texto como preto para todos os elementos */
  body {
    color: #000;
  }

  /* Definir a fonte do texto como sans-serif */
  body, button, input, select, textarea {
    font-family: sans-serif;
  }

  /* Remover estilos de lista */
  ul, ol {
    list-style: none;
  }

  /* Remover a decoração de lista */
  li {
    list-style-type: none;
  }

  /* Remover a decoração de botões */
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  /* Remover estilos de campo de entrada */
  input, textarea {
    border: none;
    outline: none;
  }

  /* Remover estilos padrão de cabeçalhos */
  h1, h2, h3, h4, h5, h6 {
    font-size: 1em;
    font-weight: normal;
  }

  /* Remover margens e preenchimentos para elementos de mídia */
  img, video {
    display: block;
    max-width: 100%;
  }

  /* Redefinir as margens de parágrafos */
  p {
    margin: 0;
  }

  /* DOTS SLIDER SLICK */
  .slick-dots {
    width: unset;
  }
  .slick-dots li button:before {
    font-size: 15px;
    color: #AD6CFF;
  }
  .slick-dots li button:before:hover {
    color: #AD6CFF;
  }
  .slick-dots li.slick-active button:before {
    color: #AD6CFF;
  }

  .container {
    position: relative;
    overflow: hidden;
  }
  
  .row {
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
  }
  
  .emphasis {
    color: #AD6CFF;
  }
  .paragraph {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.875;
    text-align: left;
    color: rgba(255, 255, 255, 0.87);
  }
  .paragraph strong {
    color: #AD6CFF;
  }
`;

export default GlobalStyles;

