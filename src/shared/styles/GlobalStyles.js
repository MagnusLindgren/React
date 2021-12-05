import { createGlobalStyle } from "styled-components"
import back from "../images/back.jpg"

export const GlobalStyles =  createGlobalStyle
`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh; 
    background-image: url(${back});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: black;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  h1 {
    color: #fbca03;
    font-weight: 600;
    font-size: 3rem;
    opacity: 0.8;
    text-shadow: 2px 1px #ff0000;
  }
  
  h2 {
    text-align: center;
    text-shadow: 2px 1px #ff0000;
  }
  
  h2,
  p {
    color: #fbca03;
    font-weight: 500;
  }
  
  h4 {
    color: #fbca03;
  }
  
  a {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
    color: #8b0000;
  }
`
