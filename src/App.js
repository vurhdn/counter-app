import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);
  function handlePlus() {
    setCounter(counter + 1);
  }
  function handleMinus() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <div className="title">Counter App</div>
      <button onClick={handlePlus} className="btn btn-primary p-3 me-3">
        +
      </button>
      <span>{counter}</span>
      <button onClick={handleMinus} className="btn btn-primary p-3 ms-3">
        -
      </button>
    </div>
  );
};

export default App;
