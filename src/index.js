import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";


import {App} from './tutorial-9/App'



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
   
      <App />
  
  </StrictMode>,
  rootElement
);
