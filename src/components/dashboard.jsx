import React, { useState } from 'react';
import "../style/dashboard.css";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`body-pd ${isNavOpen ? 'show' : ''}`}>
      <header className="header">
        <div className="header_toggle" onClick={toggleNavbar}>
          <i className={`bx ${isNavOpen ? 'bx-x' : 'bx-menu'}`} id="header-toggle"></i>
        </div>
        <div className="header_img">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div>
            <a href="/" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">BBBootstrap</span>
            </a>
            <div className="nav_list">
              <a href="/" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">Dashboard</span>
              </a>
              {/* Add more navigation links */}
            </div>
            <div className="nav_list">
              <a href="/" className="nav_link">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">User</span>
              </a>
              {/* Add more navigation links */}
            </div>
          </div>
          <a href="/" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
      <div className="height-100 bg-black">
        <h4>Main Components</h4>
      </div>
    </div>
  );
}

export default App;
