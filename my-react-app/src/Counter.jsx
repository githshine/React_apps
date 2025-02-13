// updater function = A function passed as an argument to setState() usually
//            ex. setYear (Year + 1) can be better wroten as setYear(update function),
//            usually is an arrow function
//            Used with multiple state updates and asynchronous functions
//            Good practice to use updater functionss

import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // // Update [ only update once after several state updates -- batching them for performance reasons ]

    // But this will work, because:
    // Updater function takes the PENDING state to calculate NEXT state. Not the CURRENT state
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order.
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    // if (counter > 0) {
    // setCounter(counter - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    // } else {
    //   setCounter(0);
    // }
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="counter-container">
      <p className="counter-display">{counter}</p>
      <button className="counter-button" onClick={handleIncrease}>
        Increase
      </button>
      <button className="counter-button" onClick={handleReset}>
        Reset
      </button>
      <button className="counter-button" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
