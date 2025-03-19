import { useState } from 'react';
import './theme.css';
import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function LightDarkMode() {
  // const [mode, setMode] = useState('light');
  const [mode, setMode] = useLocalStorage('theme', 'light');

  // useEffect(() => {
  //   const savedMode = localStorage.getItem('theme');
  //   console.log('Saved mode from localStorage:', savedMode);
  //   if (savedMode) {
  //     setMode(savedMode);
  //   }
  // }, []);

  function handleModeChange() {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  }

  return (
    // <div className={`light-dark-mode ${mode}`}> // My solution : to many changes
    <div className={`light-dark-mode`} data-theme={mode}>
      <div className="mode-container"></div>
      <h2 className={` ${mode}`}>Hello World!</h2>
      <button className={`modeChangeBtn ${mode}`} onClick={handleModeChange}>
        Change Mode
      </button>
    </div>
  );
}

export default LightDarkMode;
