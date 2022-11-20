import { createGlobalStyle } from "styled-components";

import "../../fonts/maginors-maginors-400.otf";
import "../../fonts/AquireBold-8Ma60.otf";
import "../../fonts/AquireLight-YzE0o.otf";
const GlobalStyles = createGlobalStyle`
  :root {
    --primary:#072144;
    --primary2: #314867;
    --primary-transparent: #072144c2;
    --primary-complement: #0951B2;
    --decoration1: #006837;
    --decoration1-2: #009144;
    --decoration2: #3BAFCA;
    --decoration2-2: #44CDEC;
    --shine: #00FFFF;
    --bright: #DAE028;
    --normal: #FFFFFF;
    --title-font: "Aquire";
    --main-title-font: "maginors";
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
   h1{
    font-family: var(--main-title-font);
    color: var(--shine);
    font-size: 1.5rem;
    letter-spacing: 3px;
   }
   a {
    color: var(--normal);
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
