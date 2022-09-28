import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Pretendard;
  }
`
const rootElement = document.getElementById('root');
// Non Null Assertion Operator
const root = createRoot(rootElement!);
root.render(<React.StrictMode>
  <GlobalStyle />
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>)