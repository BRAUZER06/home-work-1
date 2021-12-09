import React from 'react';
import ReactDOM from 'react-dom';

// import App from './tutorial-1/App.js';
// import App from './tutorial-2/App.js'
import App from './tutorial-4/App'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// function Authorization() {


//   let email = "";
//   let password = "";

//   function onChange(e, name) {
//     if (name === "email") {
//       email = e.target.value;
//     } else password = e.target.value;

//     console.log(name);
//     console.log(e.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
    

//     console.log(email, password);

//     if (email === "" || password === "") {
//       alert("пусто");
//     }else  console.log({email, password});
//   }

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} action="1">
//         <input
//           onChange={(e) => onChange(e, "email")}
//           name="email"
//           placeholder="E-Mail"
//           type="text"
//         />

//         <input
//           onChange={(e) => onChange(e, "password")}
//           name="password"
//           placeholder="Пароль"
//           type="password"
//         />
        

//         <button  type="submit">Войти</button>
//       </form>
//     </div>
//   );
// }

// export default Authorization;

