import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  const number = 10;
  return (
    <div id="app">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={6} /> */}
      <ImageSlider url="https://picsum.photos/v2/list?page=1" limit={10} />
    </div>
  );
}

export default App;
