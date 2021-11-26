import React from "react";
import "./style.css";

function Authorization() {

  let email= "";
  let password= "";

  function handleChangeInput (event, name ){  
    if( name === 'password'){
      password = event.target.value
    }
    if(name === 'email'){
      email = event.target.value
    }

  }

function handleSubmit (event){
  event.preventDefault();

  console.log({email, password});

    if( email === ""|| password===""){
      alert('ты не ввел значение')
    }

}
  return (
    <div className="container">


      <form onSubmit={handleSubmit}  action="">
        <input onChange={(e)=>{handleChangeInput(e,"email")}}     name="email"    placeholder="E-Mail" type="text" />
        <input onChange={(e)=>{handleChangeInput(e,"password")}}  name="password" placeholder="Пароль" type="password" />
        <button type="submit">Войти</button>
      </form>


    </div>
  );
}

 export default Authorization;
