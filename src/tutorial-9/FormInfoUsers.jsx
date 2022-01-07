import React from "react";
import { AppContext } from "./AppContext";

export const FormInfoUsers = () => {
  const { usersGit } = React.useContext(AppContext);

  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img className="img" src={usersGit.avatar_url} alt="#" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {usersGit.name}
            <span>@{usersGit.login}</span>
          </h1>
          <p className="app-user_about">{usersGit.bio}</p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{usersGit.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{usersGit.followers}</span>
          {/* <span>{usersGit.followers.toString().split('').splice(2,2).join('.')}к</span>      можно было запариться кнш с проверками, но как можно быстрее хочу приступить к блоку с redux */}
        </li>
        <li className="app-user_stats-item">
          Звёзд
          <span>{usersGit.public_gists}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{usersGit.location}</li>
        <li className="app-user_location-item">
          <a href="http://archakov.im">{usersGit.blog}</a>
        </li>
      </ul>
    </div>
  );
};

export default FormInfoUsers;
