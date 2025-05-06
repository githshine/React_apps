import React from 'react';
import './tabs.css';

function Tabs({ tabsContent }) {
  console.log('log test:', tabsContent);
  return (
    <div>
      <div className="tabsWrapper">
        {tabsContent.map((tab, index) => (
          // {/* <h2>{(tab.btnName, tab.content)}</h2> // the usage of comma(,): evaluates multiple expressions from left to right, but just return the value of the last expression. */}
          <button key={index}>{tab.btnName}</button>
        ))}
      </div>
      <div className="contentsWrapper">
        {tabsContent.map((tab, index) => (
          <div key={index}>{tab.content}</div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
