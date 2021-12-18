import React from "react";
import styles from "./Feedback.module.scss";
import { TextField } from "@mui/material";
// import theme from './theme'

const Feedback = ({ label, text, setvalue, value }) => {
  const [proverka, setProverka] = React.useState({});
  console.log(proverka);
  const gg = (e) => {
    if (label === "Имя") {
      setProverka({ Name: e.target.value });
    } else if (label === "Почта") {
      setProverka({ Email: e.target.value });
    } else if (label === "Текст...") {
      setProverka({ Text: e.target.value });
    }
  };

  return (
    <div className={styles.container}>
      <TextField
        onChange={(e) => setProverka(gg(e))}
        // {
        //   if (label === "Имя") {
        //     setvalue({ Name: e.target.value });
        //   } else if (label === "Почта") {
        //     setvalue({ Email: e.target.value });
        //   } else if (label === "Текст...") {
        //     setvalue({ Text: e.target.value });
        //   }
        // }

        // label === 'Имя' ? setProverka({ Name: e.target.value }) : label === "Почта" ? setProverka({ Email: e.target.value }) : label === "Текст..." ? setProverka({ Text: e.target.value })

        id="outlined-password-input"
        label={label}
        type="text"
        autoComplete="current-password"
        value={text}
        sx={{ width: 220, mb: 1 }}
        // color="black"
        // theme={theme}
      />
    </div>
  );
};

export default Feedback;
// setvalue(e.target.value)
