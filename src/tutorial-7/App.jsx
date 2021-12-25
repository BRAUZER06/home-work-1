import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import "./App.scss";
const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {console.log(data)}


  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <TextField
            {...register("firstName")}
            name="firstName"
            label="Имя"
            fullWidth
          />
          <TextField
            {...register("lastName")}
            name="lastName"
            label="Фамилия"
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            {...register("email")}
            name="email"
            label="E-Mail"
            fullWidth
          />
          <TextField
            {...register("password")}
            name="password"
            label="Пароль"
            type="password"
            fullWidth
          />
        </div>
        <br />
        <div className="row">
          <Button type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button onClick={()=>{reset()}} variant="contained" color="secondary">
            Очистить
          </Button>
        </div>
      </form>
      </div>
    
  );
};

export default App;
