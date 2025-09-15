import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

function StarRating({ noOfStars = 5 }) {
  // console.log(Array(5));
  // console.log([...Array(5)]);

  const [endIndex, setEndIndex] = useState(-1);
  // const [color, setColor] = useState('black');
  // how to choose a state: when it changes, something UI also changes,
  // then you need to recored this state!!
  const [hovingIndex, setHovingIndex] = useState(-1);

  useEffect(() => {
    // const stars = document.getElementsByTagName('FaStar');
    const stars = document.getElementsByClassName('star');

    const changeStars = [...stars].filter((_, i) => {
      return i <= endIndex || i <= hovingIndex;
    });

    console.log('changeStars: ', changeStars);

    //need to reset all
    [...stars].map((s) => (s.style.color = 'black'));

    //then set the elements that I want
    changeStars.map((star) => {
      star.setAttribute('style', 'color:red');
    });
  }, [endIndex, hovingIndex]);

  function handleOnClick(index) {
    setEndIndex(index);
  }
  function handleOnMouseEnter(index) {
    setHovingIndex(index);
  }
  function handleOnMouseLeave() {
    setHovingIndex(endIndex);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return (
          // <button
          //   className="star"
          //   key={index}
          //   onClick={() => handleOnClick(index)}
          //   onMouseMove={() => handleOnMouseEnter(index)}
          //   onMouseLeave={handleOnMouseLeave}
          //   size={40}
          //   // color={color}
          // >
          //   hi
          // </button>
          <FaStar
            className="star"
            key={index}
            onClick={() => handleOnClick(index)}
            onMouseMove={() => handleOnMouseEnter(index)}
            onMouseLeave={handleOnMouseLeave}
            size={40}
            // color={color}
          ></FaStar>
        );
      })}
    </div>
  );
}

export default StarRating;
