import { useEffect, useState } from 'react';

function DigitalClock() {
  const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState(
  //   `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  // );  //No need

  function formatTime() {
    return `${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(
      date.getSeconds()
    )}`;
  }

  function padZero(number) {
    return (number < 10 ? '0' : '') + number;
  }

  function reRender() {
    console.log('组件重新渲染，JSX代码重新执行' + date);
  }

  // reRender();  // 这里的函数调用也会在 state 更新时，重新调用！！

  // But when and how to know the date is actually changed??
  // Get new Date() every seconds!
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // clean up the resources when unmount
    return () => {
      clearInterval(intervalId); // 取消 setInterval() 设置的重复定时任务
    };
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">
        {/** 组件 state 更新时，组件内的所有 JSX代码都会重新执行。 */
        /*      也就是说，所有的函数调用都会重新调用一遍 */}
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
