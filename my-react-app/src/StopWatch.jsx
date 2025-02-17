import { useEffect, useRef, useState } from 'react';

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        // startTimeRef = new Date();  //
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    // 清理函数： React 会在每次更新前（以及最终的组件卸载时）清理副作用，确保不会创建多个无用的定时器。
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function handleStop() {
    setIsRunning(false);
  }
  function handleReset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTimer() {
    const hours = padZero(Math.floor(elapsedTime / (1000 * 60 * 60)));
    const minutes = padZero(Math.floor((elapsedTime / (1000 * 60)) % 60));
    const seconds = padZero(Math.floor((elapsedTime / 1000) % 60));
    const miliSecond = padZero(Math.floor((elapsedTime % 1000) / 10));

    return `${minutes}:${seconds}:${miliSecond}`;
  }
  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }

  return (
    <div className="stop-watch-container">
      <p className="timer">{formatTimer()}</p>
      <button className="start-btn" onClick={handleStart}>
        Start
      </button>
      <button className="stop-btn" onClick={handleStop}>
        Stop
      </button>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
