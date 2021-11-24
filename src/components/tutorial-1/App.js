import React from "react";
import  Profile from './Fuction'

function App() {

  return <div>
   <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
  </div>;
}

export default App;
