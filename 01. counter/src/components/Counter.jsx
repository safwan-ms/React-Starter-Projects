import React, { useState } from "react";
import "../style.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((value) => value + 1);
  const decrement = () => setCount((value) => value - 1);

  if (count < 0) {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="number">{count}</div>
      <div className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
