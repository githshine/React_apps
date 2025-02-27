import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  const number = 10;
  return (
    <div id="app">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={6} />
    </div>
  );
}

export default App;
