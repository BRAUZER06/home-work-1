import React from "react";
import ReactDOM from "react-dom";
  // import theme from './theme'
  // import {ThemeProvider} from '@mui/material/styles'



// import App from './tutorial-1/App.js';
// import App from './tutorial-2/App.js'
// import App from './tutorial-4/App'

// import App from './tutorial-5/App'
// import App from "./tutorial-5-1/App";
import App from "./tutorial-6/App";




// import App from './tutorial-5-2/App'
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

