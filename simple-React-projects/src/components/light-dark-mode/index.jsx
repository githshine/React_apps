import './theme.css';
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
    <div className="light-dark-mode" data-theme={mode}>
      <div className="mode-container">
        <h2>Hello World!</h2>
        <button className="modeChangeBtn" onClick={handleModeChange}>
          Change Mode
        </button>
      </div>
    </div>
  );
}

export default LightDarkMode;
