import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('');

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <button onClick={() => handleComponentClick('home')}>Home</button>
        <button onClick={() => handleComponentClick('contact')}>Contact</button>
        <button onClick={() => handleComponentClick('information')}>Information</button>
        <button onClick={() => handleComponentClick('guide')}>Guide</button>
      </div>
      <div className="content">
        {activeComponent === 'home' && <h2>Welcome to the Home Page!</h2>}
        {activeComponent === 'contact' && <h2>Contact Information Page</h2>}
        {activeComponent === 'information' && <h2>Information Page</h2>}
        {activeComponent === 'guide' && <h2>Guide Page</h2>}
      </div>
    </div>
  );
}

export default App;
