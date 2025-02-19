import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [describing, setDescribing] = useState('');

  function handelBtnClick(event) {
    const audioId = event.target.innerText;
    console.log('audioId: ', audioId);
    // console.log(event.target.innerText);
    // console.log(event.target.innerHTML);  //Not what I want (included autio element)
    const audioElement = document.getElementById(audioId);
    audioElement.play();
    setDescribing(audioElement.ariaLabel);
  }

  return (
    <div id="drum-machine">
      <div id="drum-pad-container">
        {/** Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order. */}
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="Q"
            className="clip"
            aria-label="Heather 1"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
          ></audio>
          Q
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="W"
            className="clip"
            aria-label="Heather 2"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
          ></audio>
          W
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="E"
            className="clip"
            aria-label="Dsc oh"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
          ></audio>
          E
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="A"
            className="clip"
            aria-label="Heather 6"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
          ></audio>
          A
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="S"
            className="clip"
            aria-label="Kick n Hat"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
          ></audio>
          S
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="D"
            className="clip"
            aria-label="Heather 3"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
          ></audio>
          D
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="Z"
            className="clip"
            aria-label="RP4 KICK 1"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
          ></audio>
          Z
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="X"
            className="clip"
            aria-label="Heather 4-1"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
          ></audio>
          X
        </button>
        <button className="drum-pad" onClick={handelBtnClick}>
          <audio
            id="C"
            className="clip"
            aria-label="Cev H2"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
          ></audio>
          C
        </button>
      </div>
      <div id="control-panel">
        <div>
          <p>Power</p>
          <button className="toggle-btn">ON</button>
        </div>
        <input id="display" value={describing} disabled></input>
        <div>
          <p>Bank</p>
          <button className="toggle-btn">ON</button>
          <label className="switch">
            <input type="checkbox" id="toggleSwitch" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
