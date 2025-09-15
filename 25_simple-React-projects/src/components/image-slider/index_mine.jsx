import { useEffect, useState } from 'react';
import './styles.css';

function ImageSlider({
  url = 'https://picsum.photos/v2/list?page=1',
  limit = 10,
}) {
  const [imgs, setImgs] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    const fetchUrl = new URL(url);
    fetchUrl.search = new URLSearchParams({ limit });

    //Fetch the data
    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // console.log('response.json: ', response.json);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setImgs(data);
        // setImgs([]);
      });
  }, [url, limit]);

  const heightD = 200;

  function handleLeftBtnClick() {
    setDisplayIndex((i) => (i - 1 + imgs.length) % imgs.length);
  }

  function handleRightBtnClick() {
    setDisplayIndex((i) => (i + 1) % imgs.length);
  }

  return (
    <div className="img-container">
      <button className="pageBtn" onClick={handleLeftBtnClick}>
        ⬅️
      </button>

      {imgs.map((img, index) => {
        index++; // such that key starts from 1, 1,2,3, ...

        return (
          <img
            key={index}
            className={
              index === (displayIndex || 1) ? 'shown-img' : 'slider-img'
            }
            // className="shown-img"
            src={img.download_url}
            style={{ height: heightD }}
          ></img>
        );
      })}
      <button className="pageBtn" onClick={handleRightBtnClick}>
        ➡️
      </button>
    </div>
  );
}

export default ImageSlider;
