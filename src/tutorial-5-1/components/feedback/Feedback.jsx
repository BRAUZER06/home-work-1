import React from "react";
import styles from "./Feedback.module.scss";



const Feedback = ({onChangeTop, valueTop, label, nameTop}) => {



  const onChangeTopOnChange =(event)=>{
    
      if (nameTop === "Имя") {
        onChangeTop({fullName: event.target.value});
        
      } else if (nameTop === "Почта") {
        onChangeTop({email: event.target.value});
        
      } else if (nameTop === "Текст") {
        onChangeTop({text: event.target.value});
        
      }
    

    
  
  }
  


  
  
  return (
    <div className={styles.container}>
      <input
        value={valueTop}
        onChange={onChangeTopOnChange}
        type="text"
        placeholder={label}
        name={nameTop}
      />
    </div>
  );
};

export default Feedback;




  // const onChangeInput = (e) => {
  //   if (label === "Имя") {
  //     onChange(e.target.value);
  //   } else if (label === "Почта") {
  //     onChange(e.target.value);
  //   } else if (label === "Текст...") {
  //     onChange(e.target.value);
  //   }
  // };

