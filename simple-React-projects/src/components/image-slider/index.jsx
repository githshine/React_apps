import { useEffect, useState } from 'react';
import data from '../accordion/data';
import './styles.css';
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircle,
  BsArrowRightCircleFill,
} from 'react-icons/bs';
import { SiPandas } from 'react-icons/si';

function ImageSlider({ url, limit = 10 }) {
  const [imgData, setImgData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchUrl = new URL(url);
    fetchUrl.search = new URLSearchParams({ limit });

    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Networ isn't work!");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setImgData(data);

        setIsLoading(false);
      });
  }, [url, limit]);

  function handleShowPrevious() {
    setCurrentSlide((c) => (c - 1 + imgData.length) % imgData.length);
  }
  function handleShowNext() {
    setCurrentSlide((c) => (c + 1) % imgData.length);
  }

  // function component is actually like a function
  // except can normally return a component,
  // I can also return other status under certain circumstances
  if (isLoading) return <div>Loading... Please wait for a moment</div>;

  return (
    <div className="imgSlide-wrapper">
      {/* /* {isLoading ? (
        <div>Loading... Please wait for a moment</div>
      ) :  */}

      <div className="slide-container">
        {/* <span>test content</span> */}
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handleShowPrevious}
        />
        {imgData.map((imgItem, index) => (
          <img
            key={index}
            src={imgItem.download_url}
            className={index === currentSlide ? 'currentSlide' : 'hiddenSlide'}
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleShowNext}
        />

        <span className="circle-indicator-container">
          {imgData.map((_, index) => (
            <button
              key={index}
              className={`circle-indicator ${
                index === currentSlide ? 'currentIndicator' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
}

export default ImageSlider;
