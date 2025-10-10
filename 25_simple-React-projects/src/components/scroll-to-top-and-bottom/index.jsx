import React, { useRef } from 'react';
import useFetch from '../use-fetch';

const ScrollToTopAndBottom = () => {
  const { loading, error, data } = useFetch({
    url: 'https://dummyjson.com/products?limit=0',
    options: {},
  });

  const bottomEleRef = useRef(null);

  function handleScrolltoTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  function handleScrolltoBottom() {
    // Method 1:
    // window.scrollTo({
    //   top: document.body.scrollHeight,
    //   left: 0,
    //   behavior: 'smooth',
    // });

    // Method 2:
    if (bottomEleRef.current)
      bottomEleRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  if (loading) return <h2>Loading data. Please wait~</h2>;
  if (error) return <h2>Something is wrong, please try again.</h2>;

  console.log('Data is:', data);

  return (
    <div>
      <h1>Scroll to Top and Bottom</h1>
      <h3>This is top area.</h3>
      <button onClick={handleScrolltoBottom}>Scroll to bottom</button>
      {data && data.length && (
        <ul style={{ listStyle: 'none' }}>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      <button onClick={handleScrolltoTop}>Scroll to Top</button>
      <h3 ref={bottomEleRef}>This is bottom area.</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
