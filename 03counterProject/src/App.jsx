import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10); //this is how you use useState

  const addValue = () => {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  };

  return (
    <>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
