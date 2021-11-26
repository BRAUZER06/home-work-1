import React from "react";
import "./style.css";

function Authorization() {

  let email= "";
  let password= "";

  function onChange (event, name ){  
    if( name === 'password'){
      password = event.target.value
    } else email = event.target.value

  }

function handleSubmit (event){
  event.preventDefault();

  console.log(email, password);

    if( email === ""|| password===""){
      alert('ты не ввел значение')
    }

}
  return (
    <div className="container">


      <form onSubmit={handleSubmit}  action="">
        <input onChange={(e)=>{onChange(e,"email")}} placeholder="E-Mail" type="text" />
        <input onChange={(e)=>{onChange(e,"password")}} placeholder="Пароль" type="password" />
        <button type="submit">Войти</button>
      </form>


    </div>
  );
}

 export default Authorization;
