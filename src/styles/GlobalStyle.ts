import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  html, body {
        width: 100%;
        height: 100%
        min-height: 100%;
        font-size: 16px;
        text-decoration: none;
        background: hsl(217, 36%, 95%);
        position: fixed;
  }
  * {
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      color: inherit;
      font-size: inherit;
      outline: none;
      text-decoration: inherit;
  }
`;
