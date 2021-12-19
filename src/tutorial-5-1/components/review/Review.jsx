import React from "react";
import styles from "./Review.module.scss";

const Review = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://www.meme-arsenal.com/memes/5abed9f3164164ba88734fab701f2b14.jpg"
          alt=""
        />
      </div>
      <div className={styles.div_down}>
        <h5>Вася Ганчеров</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore expedita quas atque minima quidem asperiores est natus necessitatibus voluptatibus?</p>
      </div>
    </div>
  );
};

export default Review;
