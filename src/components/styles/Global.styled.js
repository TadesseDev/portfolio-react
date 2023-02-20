import { createGlobalStyle } from "styled-components";
import maginors from "../../fonts/maginors-maginors-400.otf";
import Aquire from "../../fonts/AquireBold-8Ma60.otf";
import SansMateo from "../../fonts/SansMateo.ttf";
import DancingScript from "../../fonts/DancingScript-VariableFont_wght.ttf";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "DancingScript";
  src: url(${DancingScript});font-display: swap;
}
@font-face {
  font-family: "maginors";
  src: url(${maginors});font-display: swap;
}
@font-face {
  font-family: "Aquire";
  src: url(${Aquire});font-display: swap;
}
@font-face {
  font-family: "SansMateo";
  src: url(${SansMateo});font-display: swap;
}
  :root {
    --primary:#072144;
    --primary2: #314867;
    --primary-transparent0: #072144c2;
    --primary-complement: #0951B2;
    --decoration1: #006837;
    --decoration1-2: #009144;
    --decoration2: #3BAFCA;
    --decoration2-light: #44CDEC;
    --shine: #00FFFF;
    --bright: #DAE028;
    --normal: #FFFFFF;
    --transparent: #fffff073;
    --primary-transparent: #07214473;
    --main-title-font: maginors;
    --title-font: Aquire;
    --paragraph-font: SansMateo;
   }
   .gradientTopBottom{
    background: rgb(233,238,96);
background: linear-gradient(180deg, rgba(233,238,96,1) 0%, rgba(59,175,192,1) 100%);
   }
   #root{
    width: 100%;
    padding: 0 5vw;
        overflow: hidden;
    position: relative;
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
    color: var(--decoration2);
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
    width: 10vw;
    max-width: 50px
   }
   img {
    width: auto;
    height: auto;
   }
   .icon img{
    width: 100%;
   }
   hr.bright{
    border: 1px solid var(--bright);
   }
   .hide{
    display: none;
   }
   .link-button{
    background: transparent;
    color: var(--decoration2);
    border: none;
    outline: none;
   }
   @keyframes fade-in-opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes rotate-clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
    /*media queries*/

  @media (min-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }
    h2,h3{
            font-size: 2rem;
    }
    p{
      font-size: 1.4rem;
    }
    .icon {
    max-width: 60px;
    }
  }
`;
export default GlobalStyles;
