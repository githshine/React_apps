import React from 'react';
import './tabs.css';

function Tabs() {
  function handleChangeTabs(event, index) {
    const buttonElements = document.getElementsByClassName('tab');
    const buttonElementsArr = Array.from(buttonElements);
    buttonElementsArr.map((btnElement) => {
      console.log(btnElement.textContent);

      if (
        btnElement === event.target &&
        btnElement.classList.contains('active')
      )
        return;
      else if (
        btnElement === event.target &&
        !btnElement.classList.contains('active')
      ) {
        btnElement.classList.add('active');

        console.log('Add active to the upper element');
      } else if (btnElement.classList.contains('active'))
        btnElement.classList.remove('active');
    });

    const divName = `tab-content`;
    const TabContent_elements = document.getElementsByClassName(divName);
    const elementsArray = Array.from(TabContent_elements);
    elementsArray.map((tabContent, i) => {
      if (i + 1 === index) tabContent.style.display = 'block';
      else tabContent.style.display = 'none';
    });
  }

  return (
    <div>
      <div className="tabs">
        <button
          className="tab active"
          onClick={(event) => handleChangeTabs(event, 1)}
        >
          Home
        </button>
        <button className="tab" onClick={(event) => handleChangeTabs(event, 2)}>
          Profile
        </button>
        <button className="tab" onClick={(event) => handleChangeTabs(event, 3)}>
          Settings
        </button>
      </div>
      <div className="tab-content">
        <p>Welcome to the Home page 1!</p>
      </div>
      <div className="tab-content" style={{ display: 'none' }}>
        <p>Welcome to the Profile page 2!</p>
      </div>
      <div className="tab-content" style={{ display: 'none' }}>
        <p>Welcome to the Setting page 3!</p>
      </div>
    </div>
  );
}

export default Tabs;
