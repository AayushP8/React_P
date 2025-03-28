import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    //setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React and count</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br />
      <br />
      <button onClick={removeValue}>Subtract</button>
    </>
  );
}

export default App;
