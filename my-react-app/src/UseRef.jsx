// useState() = Store some kind of objects.
//                 Re-renders the component when the state value changes.
// useRef() = Does not cause re-renders when its value changes.
//             When you want your component to "remember" some infroamtion,
//             But you don't wnat the information to triger new renders.

import { useEffect, useRef, useState } from 'react';

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

function UseRef() {
  // const value = useRef();
  // const [number, setNumber] = useState(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    // console.log(number);
    console.log('Re-render component');
    console.log(inputRef1.current);
    console.log(inputRef1);
  });

  function handleAdd1() {
    // setNumber((n) => n + 1);

    // One way to use useRef(),  use as a variable
    // ref.current++;
    // console.log('In handelAdd function: ' + ref.current);
    // console.log(ref);

    // another way to use useRef(), refer to an element, able to change the attributes of this element
    // console.log(ref.current);
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = 'yellow';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';
  }
  function handleAdd2() {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = 'yellow';
    inputRef3.current.style.backgroundColor = '';
  }
  function handleAdd3() {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = 'yellow';
  }
  return (
    <>
      <div>
        <button onClick={handleAdd1}>Add</button>
        {/* <p>{ref.current}</p> */}
        <input ref={inputRef1}></input>
      </div>
      <div>
        <button onClick={handleAdd2}>Add</button>
        {/* <p>{ref.current}</p> */}
        <input ref={inputRef2}></input>
      </div>
      <div>
        <button onClick={handleAdd3}>Add</button>
        {/* <p>{ref.current}</p> */}
        <input ref={inputRef3}></input>
      </div>
    </>
  );
}

export default UseRef;
