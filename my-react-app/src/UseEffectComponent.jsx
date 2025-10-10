/*  think this as a side effect function when something happens
useEffect() = React Hook that tells React DO SOME CODE WHEN :
              This component re-renders
              This component mounts
              The state of a value changes

useEffect(function, [dependencies] )

1. useEffect( () => {} )     // Run after every re-render
2. useEffect( () => {}, [] ) // Run only on mount
3. useEffect( () => {}, [value] ) // Run on mount + when value changes

USES
#1 Event Listeners
#2 DOM manipulation
#3 Subscriptions (real-time updates)
#4 Fetching Data from an API
#5 Clean up when a component unmounts

#Explanations:
Mount : Adding a component to a DOM
Unmount: Deleting a component from a DOM

*/

import { useEffect, useState } from 'react';

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);
  // document.title = `Count: ${count} ${color}`; // May also has some functionalities, but useEfect give more choices

  function addCount() {
    setCount((c) => c + 1);
  }
  function changeColor() {
    setColor((c) => (c === 'green' ? 'red' : 'green'));
  }
  return (
    <div>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

function widthAdjuster() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // window.addEventListener('resize', handleResize);
  // console.log('Event Listener Added');

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('Event Listener Added');

    // clear up function, that will release the resource
    // when the component is re-rendered or unmount (when the component is deleted from DOM)
    // If don't release resource, that can lead to unexpected behavior
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener removed.');
    };
  }, []);

  // ~~ wrong code ~~   NOT WORKING
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // }, [window.innerWidth, window.innerHeight]);

  useEffect(() => {
    document.title = `Size: ${width} * ${height}`;
  }, [width, height]);

  return (
    <div>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </div>
  );
}

// export default UseEffectComponent;
export default widthAdjuster;
