import { useEffect, useState } from 'react';
import './styles.css';
function LoadMoreData({ url, limit }) {
  const [products, setProducts] = useState([]);
  const [scrollingHeight, setScrollingHeight] = useState(null); // Try to remember the posiiton before refrash the website
  const [clickCount, setClickCount] = useState(0);
  const [clickBtnEnable, setClickBtnEnable] = useState(true);

  useEffect(() => {
    function fetchProducts() {
      const skip = clickCount * limit;
      const fetchUrl = new URL(url);
      fetchUrl.search = new URLSearchParams({ limit, skip });

      fetch(fetchUrl)
        .then((response) => {
          if (!response.ok) throw new Error("Network isn't working!");

          const result = response.json(); // response.json() can only read once!!
          console.log('result: ', result);
          return result;
        })
        .then((data) => {
          console.log('data: ', data);
          // setProducts((p) => [...p, data.products]);
          setProducts((p) => [...p, ...data.products]); // should spread every array

          if (data.limit < limit) setClickBtnEnable(false);
        });
    }

    fetchProducts();
  }, [url, limit, clickCount]);

  return (
    <div className="data-wrapper">
      <div className="data-container">
        <div className="product-container">
          {products.map((product) => {
            return (
              <div key={product.id} className="product">
                <img src={product.images[0]}></img>
                <p title={product.description}>{product.title}</p>
                {/* <p title="我是一个提示信息">把鼠标悬停在这句话上看看</p> */}
              </div>
            );
          })}
        </div>
        <button
          id="loadMoreBtn"
          onClick={() => setClickCount(clickCount + 1)}
          // `${!clickBtnEnable} ? "disable" : "enable"`
          disabled={!clickBtnEnable}
        >
          Load more data
        </button>
      </div>
    </div>
  );
}

export default LoadMoreData;
