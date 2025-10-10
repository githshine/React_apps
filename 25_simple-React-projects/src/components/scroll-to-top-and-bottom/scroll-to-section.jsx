import React, { useReducer, useRef } from 'react';

const ScrollToSection = () => {
  const fourthSecRef = useRef(null);
  const secondRef = useRef(null);

  const data = [
    {
      label: 'First section',
      style: {
        width: '100%',
        height: '500px',
        backgroundColor: 'red',
      },
    },
    {
      label: 'Second section',
      style: {
        width: '100%',
        height: '500px',
        backgroundColor: 'green',
      },
    },
    {
      label: 'Third section',
      style: {
        width: '100%',
        height: '500px',
        backgroundColor: 'blue',
      },
    },
    {
      label: 'Fourth section',
      style: {
        width: '100%',
        height: '500px',
        backgroundColor: 'gray',
      },
    },
    {
      label: 'Fifth section',
      style: {
        width: '100%',
        height: '500px',
        backgroundColor: 'pink',
      },
    },
  ];

  function handelScrollToFourthSection() {
    fourthSecRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handelScrollToSecondSection() {
    secondRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <h1>Scroll to Section</h1>
      <button
        style={{ margin: '10px', padding: '10px' }}
        onClick={handelScrollToFourthSection}
      >
        Scroll to fourth section
      </button>
      <button
        style={{ margin: '10px', padding: '10px' }}
        onClick={handelScrollToSecondSection}
      >
        Scroll to Second section
      </button>

      {data &&
        data.map((item, index) => (
          <div
            key={index}
            style={item.style}
            ref={index === 1 ? secondRef : index === 3 ? fourthSecRef : null}
          >
            {item.label}
          </div>
        ))}
    </div>
  );
};

export default ScrollToSection;
