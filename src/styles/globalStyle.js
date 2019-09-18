import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }
  
  a:hover, button:hover {
    cursor: pointer;
  }
  
  body {
    font-family: 'helvetica neue', sans-serif;
  }
  
  body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }

  li {
    list-style: none;
  }
`

export default GlobalStyles
