import { createGlobalStyle, css, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle(
  ({ theme: { fonts, fontSizes, colors, lineHeights, space } }) => `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%; /* Look, it's not fixed anymore! */
    display: flex;
    flex-direction: column;
  }

  body {
      flex-grow: 1;
      background: ${colors.background};
    color: ${colors.text};
    font-family: ${fonts.body};
    line-height: ${lineHeights.body};
  }


  :root {
    --twitter: #1DA1F2;
    --facebook: #1877F2;
    --tiktok: #000000;
    --instagram:  #D82D7E;
    --youtube: #E43535;
    --contentText: #153297;;
  }

  a, a:visited {
    color: ${colors.primary};
  }

  h1{
    font-size:  ${fontSizes[5]};
    text-align: center;
    margin-top: ${space[5]};
    line-height: ${lineHeights.heading};
  }
  
  mt-m{
    margin-top:2rem;
  }

  p{
    font-size: ${fontSizes[1]};
    line-height: ${lineHeights.body};
  }

 

  /*===================*/
  /* PULSE GROW
  /*===================*/
  
  
  @-webkit-keyframes pulse-grow-on-hover {
    to {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @keyframes pulse-grow-on-hover {
    to {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .pulse-grow-on-hover {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .pulse-grow-on-hover:hover, .pulse-grow-on-hover:focus, .pulse-grow-on-hover:active {
    -webkit-animation-name: pulse-grow-on-hover;
    animation-name: pulse-grow-on-hover;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
`
);

export default GlobalStyles;
