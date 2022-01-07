import React from "react";

import axios from "axios";
import cn from "classnames";

import { AppContext } from "./AppContext.jsx";
import { FormInfoUsers } from "./FormInfoUsers";

import "./App.css";

export function App() {
  const [inputSearch, setInputSearch] = React.useState("");
  const [usersGit, setUsersGit] = React.useState([]);
  const [loading, setLoading] = React.useState(false); //  В этом Стейте в одном булевом значении заложен как input, так и buttn(disable)
  const [openBlockInfoGitUser, setOpenBlockInfoGitUser] = React.useState(false);

  const clickButtonForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const respons = await axios.get(
        `https://api.github.com/users/${inputSearch}`
      );
      if (respons) {
        setUsersGit(respons.data);
        setOpenBlockInfoGitUser(true);
      } 
    } catch (err) {
      alert("Такого пользователя нет!");
    }
    setLoading(false);
  };

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            //не смог реализовать debouse
            // onChange={debouse((item)=>{
            //   (item)=>{setInputSearch(item.target.value)}
            // }),500}
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button
            disabled={loading}
            onClick={clickButtonForm}
            className={cn("app-form_btn", loading && "app-form_btn_disable")}
          >
            Найти
          </button>
          {loading && (
            <p>
              <b>Идет поиск...</b>
            </p>
          )}
        </form>
        {openBlockInfoGitUser ? (
          <AppContext.Provider value={{ usersGit }}>
            <FormInfoUsers />
          </AppContext.Provider>
        ) : (
          <div className="block_bufer"></div>
        )}
      </div>
    </div>
  );
}
