import './App.css';
import Accordion from './components/accordion';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TestComponent from './components/test-component';
import TreeView from './components/tree-view';
import data from './components/tree-view/data';

function App() {
  // const number = 10;
  return (
    <div id="app">
      {/* <TestComponent /> */}
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={6} /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list?page=1" limit={10} /> */}
      {/* <LoadMoreData url={'https://dummyjson.com/products'} limit={20} /> */}
      {/* <TreeView menus={data} /> */}
      {/* <QRCodeGenerator /> */}
      <LightDarkMode />
    </div>
  );
}

export default App;
