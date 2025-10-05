import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/product-tile';

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductsList() {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');

      console.log('res:', res);

      const data = await res.json();
      console.log('data:', data);

      if (!data) {
        setLoading(false);
      } else {
        setProductsList(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            color="rgb(128,128, 128)"
            height={'120'}
            width={'120'}
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {productsList &&
            productsList.length > 0 &&
            productsList.map((productItem) => (
              <ProductTile product={productItem} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
