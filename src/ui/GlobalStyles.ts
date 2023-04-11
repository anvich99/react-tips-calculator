import { createGlobalStyle } from "styled-components";
import ellipse from "../assets/images/shape.svg"
export const GlobalStyles = createGlobalStyle`
body {
  display: grid;
  justify-items: center;
  background: #EAF2F2;
  background-image: url(${ellipse});
  background-repeat: no-repeat;
  
}
h1, h3, p {
    margin: 0;
}
`