import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: 'The Nautigal', cursive;
  }
`


ReactDOM.render(
  <React.StrictMode>
      <Global/>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
