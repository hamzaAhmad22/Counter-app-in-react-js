import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);
  function addValue() {
    setCounter(counter + 1);
  }
  function removeValue() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(counter = 0);
  }
  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={removeValue}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addValue}>+</button>
    </>
  );
}
export default App;