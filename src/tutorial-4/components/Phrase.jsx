import React from "react";

const Phrase = ({ textArr }) => {
  return (
    <div>
      {textArr.map((e, i) => (
        <li  key={i} className="block">{e}</li> 
      ))}
    </div>
  );
};

export default Phrase;
