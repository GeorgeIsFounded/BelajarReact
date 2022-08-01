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

function App() {
  let [produk, setProduk] = React.useState([
    {
      jenis : "Elektronik",
      produk : "Handphone",
      brand : [
        {
          nama : "Samsung",
          harga : "Rp. 1.000.000",
        },
        {
          nama : "Xiaomi",
          harga : "Rp. 500.000",
        },
      ],
    },
    {
      jenis : "Transportasi",
      produk : "Mobil",
      brand : [
        {
          nama : "Toyota",
          harga : "Rp. 1.000.000.000",
        },
        {
          nama : "Honda",
          harga : "Rp. 500.000.000",
        }
      ]
    }
  ])
  return  (
    <React.Fragment>
      <div className="line"></div>
      <h1>Latihan 1</h1>
    </React.Fragment>
  );
}

export default App;