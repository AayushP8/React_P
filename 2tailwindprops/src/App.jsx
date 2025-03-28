import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Ramesh",
    age: 21,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-purple-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username="Glay" btnText="click me" />
      <Card username="Mary" btnText="visit me" />
    </>
  );
}

export default App;
