// import data from './data';
import React, { useEffect, useState } from 'react';
import './styles.css';

const ScollIndicator = ({ url = 'https://dummyjson.com/products' }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scollPercentage, setScollPercentage] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.products) setProducts(data.products);

          setLoading(false);
        });
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      // setLoading(false);
      // console.log('data: ', data);
      // console.log('loading: ', loading);
    }
  }, [url]);

  useEffect(() => {
    // const onScroll = handleScroll;
    window.addEventListener('scroll', handleScroll);

    // return 的内容要是一个函数，作为useEffect 的清理函数； 会在模块卸载（unmount） 或者 re-render 之前运行
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    console.log(
      document.body.scrollTop, // 获取或设置 body 元素的滚动距离（旧版浏览器使用
      document.documentElement.scrollTop, // 获取或设置 documentElement（<html>）的滚动距离（现代浏览器推荐使用）。
      document.documentElement.scrollHeight, // 【获取整个文档的总高度】 返回整个 html 的高度，包括超出视口的部分 (页面可以滚动时)
      // document.documentElement.offsetHeight, //【获取元素本身的实际高度】元素的总高度，包括 padding、border； 不会计算超出可视区域的内容。
      document.documentElement.clientHeight //【获取视口（viewport）的高度 -- 仅计算可见部分】元素的可见区域高度，包括 padding，但不包括 border、margin 或滚动条。
    );

    const scrollPercentage =
      ((document.body.scrollTop || document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;

    setScollPercentage(scrollPercentage);
  }

  if (loading) return <div>Data is loading... Please wait for a while.</div>;
  if (error) return <div>{error}</div>;

  console.log('data--products: ', products);
  console.log('loading: ', loading);

  return (
    <div className="scoll-container">
      <h2 className="up-title">Cutome Devices</h2>
      <div className="scoll-progess">
        <div
          className="scroll-progress-change"
          style={{ width: `${scollPercentage}%` }}
        ></div>
      </div>
      <div className="products-container">
        <ul>
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ScollIndicator;
