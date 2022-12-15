import { createGlobalStyle } from "styled-components";
import "../index.css";

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
      width:100%;
      overflow-x:hidden;
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
    font-size:  ${fontSizes[6]};
    text-align: center;
    line-height: ${lineHeights.heading};
    padding-top: 1rem;

    @media (max-width: 768px){
      font-size:  ${fontSizes[4]};
    }
  }

  h2{
    margin-bottom: 1rem;
    font-size:  ${fontSizes[2]};
    font-weight: 900;
    margin-top: 2rem;
  }
  
  mt-m{
    margin-top:2rem;
  }

  p{
    font-size: ${fontSizes[1]};
    line-height: ${lineHeights.body};
    margin-bottom: 1rem;
  }

  .link{
    border-bottom: .05em solid ${colors.primary};
    box-shadow: inset 0 -0.05em 0 ${colors.primary};
    color: inherit;
    transition: background-color .25s cubic-bezier(.33, .66, .66, 1);
		text-decoration: none;
    display:inline;
  }
  a:hover, a:focus, a:active {
    background-color: #b4e7f8;
}

  ul.inner-list{
    list-style: inside;
    margin-left: 3rem;
    font-size: ${fontSizes[0]};

    
    > li {
      margin: 0.5rem 0 0rem 1rem;
       
    }
  }

  ol.large-numbers {
    counter-reset:li; /* Initiate a counter */
    margin-left:0; /* Remove the default left margin */
    padding-left:0; /* Remove the default left padding */
    line-height: 1.25;
    margin-bottom: 2rem;
  }
  ol.large-numbers > p {
    font-size:  ${fontSizes[0]};
    margin: 1rem 0rem 0rem 1rem;
    padding: 0 2rem 0 1rem;
  }
  ol.large-numbers > li {
    position:relative; /* Create a positioning context */
    margin: 2rem 0 1rem 2rem;
    padding: 0 2rem 0 1rem;
    font-size:  ${fontSizes[1]};
    font-weight: 900;
  }

  .mt-extra{
    margin-top:4rem;
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
