import { useState } from 'react';
import './theme.css';
import { useEffect } from 'react';

function LightDarkMode() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('modeSetting');
    console.log('Saved mode from localStorage:', savedMode);
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('modeSetting', mode);
  }, [mode]);

  function handleModeChange() {
    setMode((m) => (m === 'light' ? 'dark' : 'light'));
  }
  return (
    <div className={`light-dark-mode ${mode}`}>
      <div className="mode-container"></div>
      <h2 className={` ${mode}`}>Hello World!</h2>
      <button className={`modeChangeBtn ${mode}`} onClick={handleModeChange}>
        Change Mode
      </button>
    </div>
  );
}

export default LightDarkMode;
