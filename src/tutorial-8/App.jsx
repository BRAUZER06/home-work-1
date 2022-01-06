import React from "react";
import "./App.scss";

function App() {
  const [serverUsers, setServerUsers] = React.useState([]);

  async function getUsers() {
    try {
      let serverInfoUsers = await fetch(
        "https://61d153f0da87830017e591da.mockapi.io/users"
      ).then((res) => res.json());
      setServerUsers(serverInfoUsers);
    } catch (err) {
      console.log("Сработал блок 'catch'. Произошла Ошибка ");
    } finally {
      console.log("закинули, я те серьезно говр");
    }
  }

  return (
    <div className="App">
      <ul>
        {serverUsers.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <button onClick={getUsers}>Получить список пользователей </button>
    </div>
  );
}

export default App;

// async function getUsers() {
//   fetch("https://61d153f0da87830017e591da.mockapi.io/users").then((res) => {
//     res.json().then((result) => {
//       setServerUsers(result);
//     });
//   });
// }
