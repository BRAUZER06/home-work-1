
import React, { version } from "react";
import Review from "./components/review/Review";
import Feedback from "./components/feedback/Feedback";

import style from "./stlye.module.scss";
import { Button } from "@mui/material";

const App = () => {
  const [inputValue, setinputValue] = React.useState({fullName:'', email:'', text:''});
    console.log(inputValue);

 
  return (
    <div className={style.container}>
      <div className={style.container_up}>
        <h3>Отзывы:</h3>
        <Review />
      </div>
      <div className={style.container_down}>
        <h2>Обратная связь</h2>
        <form action="">



          
          <Feedback onChangeTop={setinputValue} valueTop={inputValue} label={"Имя"} nameTop={'Имя'} />
          <Feedback onChangeTop={setinputValue} valueTop={inputValue} label={"Почта"} nameTop={"Почта"} />
          <Feedback onChangeTop={setinputValue} valueTop={inputValue} label={"Текст..."} nameTop={"Текст"} />
    

    
          <div className={style.container_btn}>
            <Button  color='primary'>wefwefewf</Button>
            <a href="#">{"ОТПРАВИТЬ"}</a>
          </div>

         
        </form>
      </div>
    </div>
  );
};

export default App