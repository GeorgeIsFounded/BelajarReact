// // import logo from './logo.svg';
// // import './App.css';

// import React from 'react';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Hello World
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // function App() {
// //   return (
// //     <div>
// //       <h1>Helloh</h1>
// //     </div>
// //   )
// // }

// function App() {
//   let a = 20
//   let b = 10
//   return (
//     <React.Fragment>
//       <h1>Hello World ke-{a}</h1>
//       <h1>Hello World ke-{a+b}</h1>
//       <button>button</button>
//     </React.Fragment>
//   );
// }

// export default App;

import React from "react";
import "./styles/styles.css"
import Identitas from "./module/identitas";
import Nilai from "./module/nilai";

function App() {
  let [data, setData] = React.useState([10,20,30,40,50])
  return  (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className="section">
        <Identitas nama={"Iqbal"} kelas={"XI RPL"} nilai={"97"}/>
        <Identitas nama={"Fathan"} kelas={"XI RPL"} nilai={"94"}/>
        <Identitas nama={"Hilmi"} kelas={"XI RPL"} nilai={"91"}/>
        <Identitas nama={"Alfarabi"} kelas={"XI RPL"} nilai={"99"}/>
        <Identitas />
        <Nilai nama={"george"} data={data}/>
      </section>
    </React.Fragment>
  );
}

export default App;