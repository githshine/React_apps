import React, { useState } from 'react';
import './tabs.css';

function Tabs({ tabsContent }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log('log test:', tabsContent);

  function handleBtnClick(index) {
    // console.log('Click button!');
    setCurrentIndex(index);
  }

  return (
    <div>
      <div className="tabsWrapper">
        {tabsContent.map((tab, index) => (
          // {/* <h2>{(tab.btnName, tab.content)}</h2> // the usage of comma(,): evaluates multiple expressions from left to right, but just return the value of the last expression. */}
          <button
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => handleBtnClick(index)}
          >
            {tab.btnName}
          </button>
        ))}
      </div>
      <div className="contentsWrapper">
        {tabsContent.map((tab, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'activeContent' : ''}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
