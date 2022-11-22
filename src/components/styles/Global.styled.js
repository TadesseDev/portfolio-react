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
    --transparent: #fffff073;
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
   .App {
    margin: 5vw;
   }
   h1{
    font-family: var(--main-title-font);
    color: var(--shine);
    font-size: 1.5rem;
    letter-spacing: 3px;
   }
   h2{
    font-family: var(--main-title-font);
    color: var(--decoration2-2);
    font-size: 1.2rem;
    letter-spacing: 2px;
   }

   p{
    color: var(--transparent);
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
