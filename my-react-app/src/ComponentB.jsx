// useContext() = React hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import ComponentC from './ComponentC';

function ComponentB() {
  return (
    <div className="box">
      <h1>ComponentB</h1>
      {/* <h2>Hello, {props.user}</h2> */}
      <ComponentC />
    </div>
  );
}

export default ComponentB;
