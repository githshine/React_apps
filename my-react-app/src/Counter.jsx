import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <div className="counter-container">
      <p className="counter-display">{counter}</p>
      <button className="counter-button" onClick={handleIncrease}>
        Increase
      </button>
      <button className="counter-button" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
