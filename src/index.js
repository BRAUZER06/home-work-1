import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";


import {App} from './tutorial-8/App'
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
   
      <App />
  
  </StrictMode>,
  rootElement
);
