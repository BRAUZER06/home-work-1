import React from "react";
import "./App.scss";
import axios from 'axios'



export function App() {
  const [serverUsers, setServerUsers] = React.useState([]);

  async function getUsers() {
    try {
      const serverInfoUsers = await fetch(
        "https://61d153f0da87830017e591da.mockapi.io/users"
      );
      if (serverInfoUsers.ok) {
        const json = await serverInfoUsers.json();
        setServerUsers(json);
      } else {
        throw Error("Ошибка при получении данных");
      }
    } catch (err) {
      console.log("Сработал блок 'catch'. Произошла Ошибка ");
    }
    // const res = await  axios.get('https://61d153f0da87830017e591da.mockapi.io/users').then(res=>
    //   setServerUsers(res.data)
    // )


  }

  const createUser = () => {
    const emailElem = document.querySelector("#email");
    const usernameElem = document.querySelector("#userName");
    const data = {
      email: emailElem.value,
      name: usernameElem.value,
    };



    // axios.post('https://61d153f0da87830017e591da.mockapi.io/users', data)

    fetch("https://61d153f0da87830017e591da.mockapi.io/users", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });



  };

  return (
    <div className="App">
      <ul>
        {serverUsers.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={getUsers}>Получить список пользователей </button>
      <hr />
      <hr />
      <div>
        <h4>Cоздать пользователя:</h4>
        <input id="email" placeholder="Email" type="text" />
        <input id="userName" placeholder="Имя" type="text" />
        <button onClick={createUser}>Отправить</button>
      </div>
    </div>
  );
}
