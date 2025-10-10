import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

function RandomColor() {
  const [color, setColor] = useState('');
  const [form, setForm] = useState('HEX');

  // useEffect
  useEffect(() => {
    updateColor();
    // setColor(newColor);
  }, [form]);

  function updateColor() {
    // hex or RGB
    const newNum1 = Math.floor(Math.random() * 256);
    const newNum2 = Math.floor(Math.random() * 256);
    const newNum3 = Math.floor(Math.random() * 256);

    const newColor =
      form === 'HEX'
        ? '#' +
          (newNum1.toString(16).padStart(2, 0) +
            newNum2.toString(16).padStart(2, 0) +
            newNum3.toString(16).padStart(2, 0))
        : `rgb(${newNum1}, ${newNum2}, ${newNum3})`;
    // return newColor;
    setColor(newColor);
  }

  function handelBtnClick() {
    updateColor();
  }

  function handelHEXBtnClick() {
    setForm((_) => 'HEX');
    // updateColor();  // not use new form immediately, should use useEffect instead.
  }
  function handelRGBBtnClick() {
    setForm((_) => 'RGB');
    // updateColor(); // not use new form immediately, should use useEffect instead.
  }

  return (
    <div className="rdmColor-wrapper" style={{ backgroundColor: color }}>
      <button onClick={handelHEXBtnClick}>Create HEX color</button>
      {/* <button onClick={() => setForm('HEX')}>Create HEX color</button> */}
      <button onClick={handelRGBBtnClick}>Create RGB color</button>
      <button onClick={handelBtnClick}>Generate random color</button>
      <h3>{form} Color</h3>
      <h1>{color}</h1>
    </div>
  );
}

export default RandomColor;
