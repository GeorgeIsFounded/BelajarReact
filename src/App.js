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
import "./styles/styles.css"
import Button from "./komponen/button";

export default function App() {
  let [name, setName]= React.useState('')
  let [email, setEmail]= React.useState('')
  let [password, setPassword]= React.useState('')
  let [confirmPassword, setConfirmPassword]= React.useState('')
  return(
    <React.Fragmnet>
      
    </React.Fragmnet>
  )
}

// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = (git ) => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   }
//   return (
//     <React.Fragment>
//       <div className="counter">
//         <h1>Count = {count}</h1>
//         <Button onClick={handleTambah} title="Tambah" color="cyan" />
//         <Button disabled={count <= 0 ? true : false} onClick={handleKurang} title="kurang" color="blue" />
//         <Button disabled={count === 0 ? true : false} onClick={() => {
//           setCount(0);
//         }} title="reset" />
//       </div>
//     </React.Fragment>
//   );
// }

// export default App;