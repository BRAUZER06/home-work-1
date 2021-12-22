import React from "react";
import Article from "./Article";
import { hashHistory } from 'react-router';

const App = () => {
  const { pathname } = window.location;

  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
        }}
      >
        <a href="/">1 Cтраница</a>
        <a href="/post/1">2 Cтраница</a>
        <a href="/post/100500">3 Cтраница</a>
        <a href="/post/TEST">4 Cтраница</a>
      </div>
      {pathname=== '/' && <Article id={" /"}/>}
      {pathname=== '/post/1' && <Article id={" /post/1"}/>}
      {pathname=== '/post/100500' && <Article id={"/post/100500"}/>}
      {pathname=== '/post/TEST' && <Article id={"/post/TEST"}/>} */}
      {pathname&& <Article id={pathname}/>}
    </div>
  );
};

export default App;

// return <div>{pathname === "/" && <Article id={" /"}/>&&pathname === "/post/1" && <Article id={" /post/1"}/>&&pathname === "/post/100500" && <Article id={" /post/100500"}/>&&pathname === "/post/TEST" && <Article id={" /post/TEST"}/>}</div>
