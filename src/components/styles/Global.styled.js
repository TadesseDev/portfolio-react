import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --sunset1:#002501;
      --sunset2:#1c440a;
      --sunset3:#147a15;
      --sunset4:#00bc22;
      --sunset5:#90d729;
      --sunset6:#f1c52b;
      --sunset7:#fcad2f;
      --background: #d6e6e1;
   }
   #root{
    width: 100%;
   }
   body{
    background-color: var(--background);
    color: (sunset1);
    margin: 0;
    padding: 0;
    display: flex;
   }
   a {
    color: automatic;
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
