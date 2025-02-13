import React, { useState } from 'react';

function UseStateComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: 'Ford',
    model: 'Mustang',
  });

  function handleYearChange(event) {
    // setCar(car.year = event.target.value)
    setCar((prevCar) => ({ ...prevCar, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((prevCar) => ({ ...prevCar, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((prevCar) => ({ ...prevCar, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange}></input>
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange}></input>
      <br />
      <input type="text" value={car.model} onChange={handleModelChange}></input>
      <br />
    </div>
  );
}

export default UseStateComponent;
