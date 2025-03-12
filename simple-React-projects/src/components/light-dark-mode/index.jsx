import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

function LightDarkMode() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    localStorage.setItem('modeSetting', mode);
  }, [mode]);

  function handleModeChange() {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  }
  return (
    <div className={`mode-container ${mode}`}>
      <h2 className={` ${mode}`}>Hello World!</h2>
      <button className={`modeChangeBtn ${mode}`} onClick={handleModeChange}>
        Change Mode
      </button>
    </div>
  );
}

export default LightDarkMode;
