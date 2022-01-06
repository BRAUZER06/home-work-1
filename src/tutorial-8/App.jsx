import React from "react";
import "./App.scss";

export function App() {
  const [serverUsers, setServerUsers] = React.useState([]);

  async function getUsers() {
    try {
      const serverInfoUsers = await fetch(
        "https://61d153f0da87830017e591da.mockapi.io/users"
      )
      if(serverInfoUsers.ok){
        const json = await serverInfoUsers.json()
        setServerUsers(json);
      } else {
        throw Error('Ошибка при получении данных')
      }
      
    } catch (err) {
      console.log("Сработал блок 'catch'. Произошла Ошибка ");
    } 
  }

  return (
    <div className="App">
      <ul>
        {serverUsers.map((item) => 
         <li key={item.id}>{item.name}</li>
        )}
      </ul>
      <button onClick={getUsers}>Получить список пользователей </button>
    </div>
  );
}
