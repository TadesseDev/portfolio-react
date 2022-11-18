import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary:#072144;
    --primary2: #314867;
    --primary-complement: #0951B2;
    --decoration1: #006837;
    --decoration1-2: #009144;
    --decoration2: #3BAFCA;
    --decoration2-2: #44CDEC;
    --shine: #00FFFF;
    --bright: #DAE028;
    --normal: #FFFFFF;
   }
   #root{
    width: 100%;
   }
   body{
    background-color: var(--primary);
    color: var(--normal);
    margin: 0;
    padding: 0;
    display: flex;
   }
   a {
    color: var(--bright);
    text-decoration: none;
   }
   ul{
    margin: 0;
    padding: 0;
   }
   li{
    list-style: none;
   }
`;
export default GlobalStyles;
