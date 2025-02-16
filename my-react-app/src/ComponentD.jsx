// useContext() = React hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

import { useContext } from 'react';
import { UserContext } from './ComponentA'; // can't write "Component", should be "./Component"

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentD </h1>
      <h2>Bye, {user}</h2>
    </div>
  );
}

export default ComponentD;
