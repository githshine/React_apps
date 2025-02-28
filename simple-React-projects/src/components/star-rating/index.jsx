import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

function StarRating({ noOfStars = 5 }) {
  // console.log(Array(5));
  // console.log([...Array(5)]);

  // const [endIndex, setEndIndex] = useState(-1);
  const [endIndex, setEndIndex] = useState(0);

  // 1) HOW TO CHOOSE A STATE: when it changes, something UI also changes,
  // then you need to recored this state!!

  // 2) HOW TO SET INITIAL STATE
  // if initState = -1, then when calculating index <= (hovingIndex || endIndex)
  // when hover the first element, hovingIndex will be considered as false(0),
  // therefore will use endIndex's value ==> cause errors
  // const [hovingIndex, setHovingIndex] = useState(-1);
  const [hovingIndex, setHovingIndex] = useState(0);

  function handleOnClick(index) {
    setEndIndex(index);
  }
  function handleOnMouseEnter(index) {
    setHovingIndex(index);
  }
  function handleOnMouseLeave() {
    // setHovingIndex(endIndex);  // this is ok, the line below is ok too
    // Actually, I like this one, this is separated hobingIndex and endIndex, which is good. [DO not mix things together]
    setHovingIndex(0); // because of index <= (hovingIndex || endIndex) so this's ok~
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index++;

        return (
          <FaStar
            // className="star"
            key={index}
            className={
              index <= (hovingIndex || endIndex) ? 'active' : 'Inactive'
            }
            onClick={() => handleOnClick(index)}
            onMouseMove={() => handleOnMouseEnter(index)}
            onMouseLeave={() => handleOnMouseLeave()}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
}

export default StarRating;
