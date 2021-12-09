import React from "react";
import "./App.css";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";

const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];

const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];

const App = () => {
  const [text, setText] = React.useState([]);

  const generation = (arrText) => {
    return arrText[Math.floor(Math.random() * arrText.length)];
  };

  const buttonGenerateRandomText = () => {
    setText([
      `${generation(adjectivesArr)} ${generation(adjectivesArr)}  ${generation(
        nounsArr
      )}`,
      ...text,
    ]);
  };

  const buttonClickRemoveText = () => {
    setText([]);
  };

  return (
    <div className="wrapper">
      <button className="btn btn_generate" onClick={buttonGenerateRandomText}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={buttonClickRemoveText}>
        Очистить
      </button>
      {text.length > 0 ? <Phrase textArr={text} /> : <EmptyBlock />}
    </div>
  );
};

export default App;
