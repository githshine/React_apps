import data from './data';
import React, { useEffect, useState } from 'react';
import './styles.css';

const ScollIndicator = ({ url = 'https://dummyjson.com/products' }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  if (loading) return <div>Data is loading... Please wait for a while.</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="scoll-container">
      <h2 className="up-title">Cutome Devices</h2>
      <input type="tel"></input>
      <ul>
        {data &&
          data.products &&
          data.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default ScollIndicator;
