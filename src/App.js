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

// let [name, setName]= React.useState('')
// let [email, setEmail]= React.useState('')
// let [password, setPassword]= React.useState('')
// let [confirmPassword, setConfirmPassword]= React.useState('')

import React from "react";
import "./styles/styles.css"
import Button from "./komponen/button";
import Input from "./komponen/input";
import Card from "./komponen/card";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const handleChange = (e) => {
    e.preventDefault()
    console.log("ok shiap jalan")
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value
      }
    });

    if (e.target.value !== "") {
      setErrors({
        ...errors,
        [e.target.name]: true
      });
    }
    else {
      setErrors({
        ...errors,
        [e.target.name]: true
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form tersubmit")

    values.id = new Date().getTime()
    setData((data) => {
      return [...data, values];
    })

    setData(() => {
      return [...data, values];
    })

    setData((data) => {
      return [...data, values];
    })

    setValues((values) => {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
    })
  }

  const handleBlur = (e) => {
    e.preventDefault()
    if (e.target.value === "") {
      setErrors((errors) => {
        return {
          ...errors,
          [e.target.name]: true
        }
      })
    }
    setValues((errors) => {
      return {
        ...values,
        [e.target.name]: true
      }
    })
  }

  console.log("errors", errors);

  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <form
          onSubmit={handleSubmit}
          style={{ width: "50%" }}>
          <Input
            isError={errors?.username}
            tectError={"please fill this input"}
            name="username"
            value={values.username}
            label={"Username"}
            placeholder='username'
            onBlur={handleBlur}
            onChange={handleChange}
          // onChange={(event) => {
          //   event.preventDefault();
          //   // console.log("ok jalan")
          //   // console.log(event)
          //   setValues((values) => {
          //     return {
          //       ...values,
          //       username: event.target.value,
          //     }
          //   })
          // }}
          />
          <Input
            isError={errors?.username}
            tectError={"please fill this input"}
            name="email"
            value={values.email}
            label={"Email"}
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            isError={errors?.username}
            tectError={"please fill this input"}
            name="password"
            value={values.password}
            label={"Password"}
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            isError={errors?.username}
            tectError={"please fill this input"}
            name="confirmPassword"
            value={values.confirmPassword}
            label={"ConfirmPassword"}
            placeholder="confirm-password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button title={"simpan"} />
        </form>
        <div
          style={{
            marginLeft: "50px"
          }}
        >
          {/* <p>Username : {values?.username}</p>
          <p>Email : {values?.email}</p>
          <p>Password : {values?.password}</p>
          <p>Confirm-Password : {values?.confirmPassword}</p> */}

          <Card data={data} value={values} />

        </div>
      </div>
    </React.Fragment>
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