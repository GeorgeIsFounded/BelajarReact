import React from "react";
import Textarea from "./Component/Textarea";
import Input from "./Component/Input";
import Button from "./Component/Button";
import "./styles/styles.css";
import Card from "./Component/Card.jsx";

function App() {
  const [values, setValues] = React.useState([]);
  const [data, setData] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id : new Date().getTime(),
      text: data,
      completed: false,
    }

    setValues([... values].concat(newData));
    setData('')
  };
  
  return (
    <React.Fragment>
      <h1 className="not">Notes <input className="input" /></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="catatan">Buat Catatan</h1>
          <Input
            className="judul"
            name="username"
            placeholder={"Judul"}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button type="submit" className="button">Button</button>
        </div>
      </form>
      {values.map((data) => <div>{data.text}</div>)}
    </React.Fragment>
  );
}


export default App;