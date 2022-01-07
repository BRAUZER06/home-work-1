import React from "react";

import axios from "axios";
import cn from "classnames";

import { AppContext } from "./AppContext.jsx";
import { FormInfoUsers } from "./FormInfoUsers";

import "./App.css";

export function App() {
  const [inputSearch, setInputSearch] = React.useState("");
  const [usersGit, setUsersGit] = React.useState([]);
  const [uploading, setUploading] = React.useState(false); //  В этом Стейте в одном булевом значении заложен как input, так и buttn(disable)
  const [openBlockInfoGitUser, setOpenBlockInfoGitUser] = React.useState(false);
  
  const clickButtonForm = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      await axios
        .get(`https://api.github.com/users/${inputSearch}`)
        .then((res) => {
          setUsersGit(res.data);
          setOpenBlockInfoGitUser(true);
        });
    } catch (err) {
      alert("Такого пользователя нет!");
    }
    setUploading(false);
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
            disabled={uploading}
            onClick={clickButtonForm}
            className={cn("app-form_btn", uploading && "app-form_btn_disable")}
          >
            Найти
          </button>
          {uploading && (
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

