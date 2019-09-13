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

  a:visited {
    color: initial;
  }

  a:hover, button:hover {
    cursor: pointer;
  }
  
`

export default GlobalStyles
