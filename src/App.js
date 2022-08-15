import React from "react";
import "./styles/styles.css";
import Card from "./komponen/card.jsx";

function App() {
  let [warna, setWarna] = React.useState("black")
  let [count, setCount] = React.useState(0)

  return (
    <React.Fragment>
      <div>
        <div></div>
        <Card warna={warna} setWarna={setWarna}/>
      </div>
    </React.Fragment>
  )
}

export default App;