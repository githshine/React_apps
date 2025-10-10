import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/product-tile';

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartDic, setCartDic] = useState({});

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

  function handleAddToCart(product) {
    console.log('handel add to cart:', product);
    const copyCartDic = { ...cartDic };
    // copyCartList.findIndex(item => item.id === product.id)
    // 不能用Map 来存储object key，然后后期进行比较：因为这样的话，必须保证每次使用的object key 都是同一个实例 instance。 做不到！
    // if (copyCartMap.has(product))
    //   copyCartMap.set(product, copyCartMap.get(product) + 1);
    // else copyCartMap.set(product, 1);

    if (product.id in copyCartDic) copyCartDic[product.id]++;
    else copyCartDic[product.id] = 1;

    setCartDic(copyCartDic);

    console.log('copyCartDic:', copyCartDic);
  }

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
              <ProductTile
                product={productItem}
                // handleAddToCart={() => handleAddToCart(productItem)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
