import React from "react";
import "./styles/styles.css";
import Input from "./komponen/input";
import Button from "./komponen/button";
import Card from "./komponen/card.jsx"

function App() {

  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    password: "",
    confirmPassword: ""
  });

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
        [e.target.name]: e.target.values
      });
    }
    else {
      setErrors({
        ...errors,
        [e.target.name]: e.target.values
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
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        password: "",
        confirmPassword: ""
      }
    })
  }

  return (
    <React.Fragment>
      <div className="Moco">
        <div className="container">
          <form style={{ width: "50%" }}>
            <p>name</p>
            <Input
              isError={errors?.username}
              textError={"please fill this input"}
              name="username"
              value={values.username}
              placeholder='username'
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
            <p>email</p>
            <Input
              isError={errors?.email}
              textError={"please fill this input"}
              name="email"
              value={values.email}
              placeholder="email"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <p>tempat lahir</p>
            <Input
              isError={errors?.tempatLahir}
              textError={"please fill this input"}
              name="tempatLahir"
              value={values.tempatLahir}
              placeholder="tempat lahir"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <p>tanggal lahir</p>
            <Input
              isError={errors?.tanggalLahir}
              textError={"please fill this input"}
              type="date"
              name="tanggalLahir"
              value={values.tanggalLahir}
              placeholder="tanggal lahir"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <p>jenis kelamin</p>
            <Input
              isError={errors?.jenisKelamin}
              textError={"please fill this input"}
              type=""
              name="jenisKelamin"
              value={values.jenisKelamin}
              placeholder="jenis kelamin"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <p>password</p>
            <Input
              isError={errors?.password}
              textError={"please fill this input"}
              name="password"
              value={values.password}
              placeholder="password"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <p>confirm password</p>
            <Input
              isError={errors?.confirmPassword}
              textError={"please fill this input"}
              name="confirmPassword"
              value={values.confirmPassword}
              placeholder="confirm-password"
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <div className="gimm">
              <Button title={"delete"} />
              <Button title={"save"} />
            </div>
          </form>
          <Card data={data} value={values} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;