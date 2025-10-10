import { useState, useEffect } from 'react';
import './styles.css';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Current count:', count);
  };

  // const onClick = useEffectEvent(handleClick);
  const onClick = () => {};

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <button
      className="increaseBtn"
      style={{ width: '200px', backgroundColor: 'red' }}
      onClick={() => setCount(count + 1)}
    >
      Increase
    </button>
  );
}
