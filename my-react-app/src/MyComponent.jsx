import React,{useState} from "react";

function MyComponent(){
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);



  const updateName = () => {
    setName(name + "2");
  }

  const incrementAge= () => {
    setAge(age + 1);
  }

  const changeEmployed = () => {
    setIsEmployed(!isEmployed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Name: {age}</p>
      <button onClick={incrementAge}>Increament Age</button>

      <p>Name: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={changeEmployed}>Change Employed</button>
    </div>)
}

export default MyComponent;