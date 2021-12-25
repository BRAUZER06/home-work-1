import React from "react";

const Article = ({id}) => {
  return (
    <div>
      <h1 style={{width: "600px"}}>Статья № <span style={{color: "red"}}>{id}</span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        distinctio fuga animi aliquam sit id veritatis, doloribus ducimus quas,
        dignissimos non minima quia amet possimus? Impedit nemo ducimus fuga
        rem!
      </p>
      <a href="/">
        <button >Назад</button>
      </a>
    </div>
  );
};

export default Article;
