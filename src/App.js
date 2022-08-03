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
// //       <h1>Hello World</h1>
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
import Layout from "./komponen/layout";
import "./styles/styles.css"
import Button from "./komponen/button";

function App() {
  return (
    <React.Fragment>
      <h1>Belajar Props 2</h1>
      <Layout title={'rekomendasi 1'}>
        <h1>SMK MADINATULQURAN</h1>
      </Layout>
      <Layout title={'rekomendasi 2'}>
        <h1>SMK IDN</h1>
      </Layout>
      <Layout title={'rekomendasi 3'}>
        <h1>SMK CIPECANG</h1>
      </Layout>
      <Button onclick={() => {
        console.log("button ini di click")
      }}
        color="blue" title={'simpan'} />
      <Button title={'batal'} onclick={() => {
        console.log("button batal di klik");
      }}
      disabled={true}
      />
      <Button color="green" title={'update'} onclick={() => {
        console.log("button ini di disable")
      }}/>
    </React.Fragment>
  );
}

export default App;