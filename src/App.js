import React, { useState } from "react";
import "./App.css";

const MenuItem = ({ title, selected, onClick }) => {
  return (
    <button
      className={`menu-item ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Content = ({ selectedItem }) => {
  const getContent = () => {
    switch (selectedItem) {
      case "home":
        return (
          <div>
            <h2>Welcome to the Home Page</h2>
            <p>This is the content for the Home Page.</p>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2>Contact Information</h2>
            <p>This is the content for the Contact Page.</p>
          </div>
        );
      case "information":
        return (
          <div>
            <h2>Information Page</h2>
            <p>This is the content for the Information Page.</p>
          </div>
        );
      case "guide":
        return (
          <div>
            <h2>User Guide</h2>
            <p>This is the content for the User Guide Page.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="content">{getContent()}</div>;
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleMenuItemClick = (menuItem) => {
    setSelectedItem(menuItem);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <MenuItem
          title="Home"
          selected={selectedItem === "home"}
          onClick={() => handleMenuItemClick("home")}
        />
        <MenuItem
          title="Contact"
          selected={selectedItem === "contact"}
          onClick={() => handleMenuItemClick("contact")}
        />
        <MenuItem
          title="Information"
          selected={selectedItem === "information"}
          onClick={() => handleMenuItemClick("information")}
        />
        <MenuItem
          title="Guide"
          selected={selectedItem === "guide"}
          onClick={() => handleMenuItemClick("guide")}
        />
      </div>
      <Content selectedItem={selectedItem} />
    </div>
  );
};

export default App;
