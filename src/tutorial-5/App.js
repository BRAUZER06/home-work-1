import React from "react";

import Review from "./components/review/Review";
import Feedback from "./components/feedback/Feedback";
import Button from "./components/button/Button";
// import { Button } from "@mui/material";

import theme from "./components/feedback/theme";
import style from "./stlye.module.scss";

const App = () => {
  const [all, setAll] = React.useState({});
  const [value, setValue] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.container}>
      <div className={style.container_up}>
        <h3>Отзывы:</h3>
        <Review />
      </div>
      <div className={style.container_down}>
        <h2>Обратная связь</h2>
        <form onSubmit={submit} action="">
          <Feedback onChange={(e)=>setValue(e.target.value)} value={value} label={"Имя"} />
          <Feedback onChange={(e)=>setValue(e.target.value)} value={value} label={"Почта"} />
          <Feedback onChange={(e)=>setValue(e.target.value)} value={value} label={"Текст..."} />
          <Button>ОТПРАВИТЬ</Button>
        </form>

        {/* <Feedback theme={theme} label={"Текст..."} />
        <Button theme={theme}>ОТПРАВИТЬ</Button> */}
      </div>
    </div>
  );
};

export default App;
