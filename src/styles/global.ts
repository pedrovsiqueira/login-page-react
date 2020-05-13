import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline:0;
  }
body{
  background: linear-gradient(-45deg, #434343 0%, black 100%);
  color: #FFF;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;

}
border-style, -moz-user-input, button{
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, strong{


}
button{
  cursor: pointer;
}

`;
