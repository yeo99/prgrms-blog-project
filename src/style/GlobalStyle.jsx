/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
        background-color: #f4f4f4;
      }
    `}
  />
);

export default GlobalStyle;
