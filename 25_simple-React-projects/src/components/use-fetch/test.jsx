import React from 'react';
import useFetch from '.';

const TestFetch = () => {
  const { loading, error, data } = useFetch({
    url: 'https://dummyjson.com/products',
    options: {},
  });
  return (
    <div>
      <h2>useFetch Test</h2>
      {loading && <h3>Loading data Please wait!</h3>}
      {error && <h2>Some error occured. Please check.\n {error}</h2>}
      {data &&
        Array.isArray(data) &&
        data.length &&
        data.map((item) => <p key={item.id}> {item.title}</p>)}
    </div>
  );
};

export default TestFetch;
