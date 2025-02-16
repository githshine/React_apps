import Button from './Button';
import Button2 from './Button2';
import Card from './Card';
import List from './List';
import Student from './Student';
import UserGreeting from './UserGreeting';
import ProfilePicture from './ProfilePicture';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Input from './Input';
import ColorPicker from './ColorPicker';
import UseStateComponent from './UseStateComponent';
import UseStateComponent_Array from './UseStateComponent';
import UseStateComponent_ArrayofObjects from './UseStateComponent';
import ToDoList from './ToDoList';
import UseEffectComponent from './UseEffectComponent';
import DigitalClock from './DigitalClock';
import ComponentA from './ComponentA';
import UseRef from './UseRef';

function App() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'banana', calories: 105 },
    { id: 3, name: 'orange', calories: 45 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ];

  const doors = [
    { id: 1, name: 'door1', calories: 95 },
    { id: 2, name: 'door2', calories: 23 },
    { id: 3, name: 'door3', calories: 45 },
    { id: 4, name: 'door4', calories: 67 },
    { id: 5, name: 'door5', calories: 138 },
  ];

  return (
    <>
      {/* <Card /> */}
      {/* <Button /> */}
      {/* <UserGreeting  isLoggedIn="true" userName={23} /> */}
      {/* {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
    {doors.length > 0 && <List items={doors} category="Doors"/>  } */}

      {/* <Button2 /> */}
      {/* <ProfilePicture /> */}
      {/* <MyComponent /> */}
      {/* <Counter /> */}
      {/* <Input></Input> */}
      {/* <ColorPicker></ColorPicker> */}
      {/* <UseStateComponent_ArrayofObjects></UseStateComponent_ArrayofObjects> */}
      {/* <ToDoList></ToDoList> */}
      {/* <UseEffectComponent></UseEffectComponent> */}
      {/* <DigitalClock></DigitalClock> */}
      {/* <ComponentA></ComponentA> */}
      <UseRef></UseRef>
    </>
  );
}

export default App;
