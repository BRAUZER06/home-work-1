import React from "react";
import Inputs from "./Inputs";
import "./App.scss";

//МОИ БЕДНЫЕ ЖЕЛЕЗНЫЕ НЕРВЫ
const App = () => {
  const [comments, setComments] = React.useState([]);
  const [fields, setFields] = React.useState({
    fullName: "",
    email: "",
    text: "",
    createdAt: "",
  });

  const onChangeInput = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitFormClick = (e) => {
    e.preventDefault();

    setComments([
      ...comments,
      { ...fields, createdAt: new Date().toLocaleString() },
    ]);
    console.log(comments);
  };

  const removeItem = (index) => {
    const newArr = comments.filter((_, i) =>  index !== i);
    setComments(newArr);
  };

  React.useEffect(() => {
    const comment = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(comment);
  }, []);
  
  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);



  
  return (
    <div className="container">
      {comments.map((item, index) => (
        <Inputs
          key={`${item}_${index}`}
          value={comments}
          name={item.fullName}
          comment={item.text}
          index={index}
          onRemove={removeItem}
        /> // я заю что это можно было сократить
      ))}
      <form onSubmit={onSubmitFormClick}>
        <input
          value={fields.fullName}
          onChange={onChangeInput}
          name="fullName"
          placeholder="Имя"
        />
        <input
          value={fields.email}
          onChange={onChangeInput}
          name="email"
          placeholder="Почта"
        />
        <input
          value={fields.text}
          onChange={onChangeInput}
          name="text"
          placeholder="Текст"
        />
        <button>ОТПРАВИТЬ</button>
      </form>
    </div>
  );
};

export default App;
