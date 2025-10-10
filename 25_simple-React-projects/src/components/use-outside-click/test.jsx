import React, { useRef, useState } from 'react';
import useOutsideClick from '.';

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      <h2>Test</h2>
      {showContent ? (
        <div>
          <h3>Some Content</h3>
          <p ref={ref}>
            If you want to close this content area, please click somewhere
            outside this area.
          </p>
          <p>第3行的内容</p>
          <p>第4行的内容</p>
          <p>第5行的内容</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOnclickOutsideTest;
