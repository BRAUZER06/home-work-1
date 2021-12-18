import React from "react";
import style from "./button.module.scss";
// import { Button } from '@mui/material';

const Button = ({children}) => {
  return (
    <div className={style.container}>

      <a href="#">{children}</a>
      {/* <Button variant="contained">Contained</Button> */}
    </div>
  );
};

export default Button;
