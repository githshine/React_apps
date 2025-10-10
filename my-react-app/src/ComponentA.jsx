// useContext() = React hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

// PROVIDER COMPONENT
// 1. import { createContext } from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//       <Child />
//   </ MyContext.Provider>

// COSUME COMPONENTS
// 1. import { useContext } from 'react';
//    import { MyContext } from "/ComponentA"
// 2. const value = useContext(MyContext);

import { createContext, useState } from 'react';
import ComponentB from './ComponentB';
import ComponentD from './ComponentD';

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState('Hannha');

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>Hello, {user}</h2>

      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>

      <UserContext.Provider value={user}>
        <ComponentD />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
