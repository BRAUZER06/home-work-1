import React from "react";
import ProfileOne from './SimpleComponent'
import ProfileTwo  from "./StatelessСomponent";


function App() {

  return <div>
   <ProfileOne name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
   <ProfileTwo name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
  </div>;
}

export default App;
