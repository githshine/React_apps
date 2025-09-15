import React from 'react';
import Tabs from './tabs';

function RandomComponent() {
  return <h1>Some Random Content</h1>;
}

function TabsTest() {
  const tabs = [
    { btnName: 'Home', content: 'Welcome to the Home page!' },
    { btnName: 'Profile', content: 'Welcome to the Profile page!' },
    // { btnName: 'Settings', content: <RandomComponent /> },
    { btnName: 'Settings', content: 'Random content' },
    { btnName: 'Career', content: 'Find you career here.' },
    { btnName: 'About', content: 'This is who am I.' },
    // { btnName: 'Contact Us', content: 'You can find me here.' },
  ];
  return (
    <div>
      {' '}
      <h1>Tabs Test</h1>
      <Tabs tabsContent={tabs} />
    </div>
  );
}

export default TabsTest;
