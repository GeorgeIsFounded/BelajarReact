import React from "react";
import "./styles/styles.css";

function App() {

  let [count, setCount] = React.useState(0)
  let [message, setMessage] = React.useState(0)
  let [text, setText] = React.useState(false)
  let [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setMessage(message + 1)
    console.log('useEffect berjalan')
  }, [count, text])

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  if (isLoading) {
    return <div className="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
  }

  // React.useEffect(() => {
  //   console.log('useEffect')

  //   setCount(count + 1)
  //   console.log(count)
  // }, []);

  return (
    <React.Fragment>
      <h1>Belajar use effect</h1>
      <h3>{message === 10 ? 'ini sepuluh' : 'bukan sepuluh'}</h3>
      <h1>Message : {message}</h1>
      <h1>Count : {count}</h1>
      <button
      onClick={() => {
        setCount(count + 1)
      }}
      >
        MORE
      </button>
      <button
      onClick={() => {
        setText(!text)
      }}
      >
        CHANGE
      </button>
    </React.Fragment>
  );
}

export default App;