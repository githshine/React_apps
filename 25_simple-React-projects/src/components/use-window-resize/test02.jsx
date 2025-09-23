import React, { useEffect, useState } from 'react';

const WindowEventsDemo = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [online, setOnline] = useState(navigator.onLine);
  const [lastKey, setLastKey] = useState('');

  useEffect(() => {
    // 1. 窗口大小变化
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // 2. 滚动事件
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // 3. 网络状态
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    // 4. 键盘按键
    const handleKeyDown = (event) => {
      setLastKey(event.key);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('keydown', handleKeyDown);

    // 初始化一下
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{ padding: '20px', lineHeight: '2' }}>
      <h2>🌐 Window Events Demo</h2>
      <p>
        窗口大小：{size.width} × {size.height}
      </p>
      <p>滚动位置：Y = {scrollY}px</p>
      <p>网络状态：{online ? '✅ 在线' : '❌ 离线'}</p>
      <p>最后按下的键：{lastKey || '（无）'}</p>

      <div
        style={{
          height: '2000px',
          border: '1px solid #ccc',
          marginTop: '20px',
        }}
      >
        <p>往下滚动看看 scroll 事件效果 👇</p>
      </div>
    </div>
  );
};

export default WindowEventsDemo;
