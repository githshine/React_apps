import React, { useState } from 'react';

// Object
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

function UseStateComponent_Array() {
  const [foods, setFoods] = useState(['Banada', 'Orange']);

  function handleButtonClick() {
    const newFood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = '';
    if (newFood) setFoods((prevFoods) => [...prevFoods, newFood]);
  }

  // function handleRemoveFood(index) {
  //   const removedFood = foods.splice(index, 1);
  //   console.log(removedFood);
  //   setFoods([...foods]);
  // }

  // another way to remove an element in an Array : using filter
  function handleRemoveFood(index) {
    // setFoods((f) => f.filter((item, i) => i !== index));
    setFoods((f) => f.filter((_, i) => i !== index)); // 不用的参数 用 _ 表示, 更加省空间
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((item, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {item}
          </li>
        ))}
      </ul>
      <div className="inputDiv">
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleButtonClick}>Add</button>
      </div>
    </div>
  );
}

function UseStateComponent_ArrayofObjects() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar() {
    if (carYear && carMake && carModel)
      setCars((c) => [...c, { year: carYear, make: carMake, model: carModel }]);
    // document.getElementsByClassName('carInfo').value = ''; // 返回的是 HTML Collection，没有 value 属性，不能直接设置value
    // document.getElementById('carInfo').value = '';  // 只有 byId 可以直接设置value为空，因为只有 byId 返回的是HTML element
    setCarYear(new Date().getFullYear());
    // setCarYear(0);
    setCarMake('');
    setCarModel('');
  }
  function handleRemoveCar(index) {
    // setCars(cars.filter((_, i) => i !== index));
    setCars((preCars) => preCars.filter((_, i) => i !== index));
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        className="carInfo"
        type="number"
        value={carYear}
        onChange={handleYearChange}
      ></input>{' '}
      <br />
      <input
        className="carInfo"
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      ></input>
      <br />
      <input
        className="carInfo"
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      ></input>
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default UseStateComponent_ArrayofObjects;
