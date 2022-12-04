import { createGlobalStyle } from "styled-components";

import "../../fonts/maginors-maginors-400.otf";
import "../../fonts/AquireBold-8Ma60.otf";
import "../../fonts/AquireLight-YzE0o.otf";
import "../../fonts/SansMateo.ttf";
const GlobalStyles = createGlobalStyle`

  :root {
    --primary:#072144;
    --primary2: #314867;
    --primary-dark: #04152c;
    --primary-transparent: #072144c2;
    --primary-complement: #0951B2;
    --decoration1: #006837;
    --decoration1-2: #009144;
    --decoration2: #3BAFCA;
    --decoration2-light: #44CDEC;
    --shine: #00FFFF;
    --bright: #DAE028;
    --normal: #FFFFFF;
    --transparent: #fffff073;
    --title-font: "Aquire";
    --main-title-font: "maginors";
    --paragraph-font: "Sans Mateo";
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
   #root {
    margin: 2vw 5vw;
   }
   h1{
    font-family: var(--main-title-font);
    font-weight: normal;
    color: var(--shine);
    font-size: 1.5rem;
    letter-spacing: 3px;
   }
   h2,h3{
    font-family: var(--title-font);
    color: var(--shine);
    font-size: 1.2rem;
    letter-spacing: 2px;
   }

   h3{
    font-size: 1.1rem;
    letter-spacing: 2px;
    color: var(--decoration2);
   }

   p {
    color: var(--transparent);
    font-family:  var(--paragraph-font);
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
   .icon {
    max-width: 50px
   }
   .icon img{
    width: 100%;
   }
`;
export default GlobalStyles;
