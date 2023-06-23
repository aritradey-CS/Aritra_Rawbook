import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <h2>Home Component</h2>;
      case 'contact':
        return <h2>Contact Component</h2>;
      case 'information':
        return <h2>Information Component</h2>;
      case 'guide':
        return <h2>Guide Component</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="left-panel">
        <button onClick={() => handleComponentClick('home')}>Home</button>
        <button onClick={() => handleComponentClick('contact')}>Contact</button>
        <button onClick={() => handleComponentClick('information')}>Information</button>
        <button onClick={() => handleComponentClick('guide')}>Guide</button>
      </div>
      <div className="content">{renderComponent()}</div>
    </div>
  );
};

export default App;
