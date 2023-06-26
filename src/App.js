import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import "./App.css";

const Home = () => (
  <div>
    <h2>Welcome to My Home Page</h2>
    <p>Lorem ipsum dolor sit amet consectetur</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact Information</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi nesciunt
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
      blanditiis.
    </p>
  </div>
);

const Information = () => (
  <div>
    <h2>Information Page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
      dolorum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
      velit itaque optio facilis adipisci exercitationem nesciunt quae esse
      debitis quas?ullam explicabo laboriosam veritatis amet minima qui cumque
      beatae molestiae
    </p>
  </div>
);

const Guide = () => (
  <div>
    <h2>User Guide</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet provident
      enim reiciendis unde fugiat distinctio dolores suscipit accusantium, sint
      nam, rem eum! Illum Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Doloribus facilis sapiente tempora magni vitae, atque, tempore sit
      ab enim magnam officiis saepe placeat, reprehenderit excepturi? Lorem
      ipsum dolor sit amet.
    </p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="App">
      <div className="left-panel">
        <NavLink to="/" className="menu-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/Contact" className="menu-item" activeClassName="active">
          Contact
        </NavLink>
        <NavLink
          to="/Information"
          className="menu-item"
          activeClassName="active"
        >
          Information
        </NavLink>
        <NavLink to="/Guide" className="menu-item" activeClassName="active">
          Guide
        </NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Guide" element={<Guide />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
