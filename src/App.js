import React, { useState } from 'react';
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ffffff" }}>
      <a className="navbar-brand text-light" href="#">
        <img src={logo} alt="Logo" height="40" className="mr-2" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function SubHeader() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <nav className="nav nav-tabs">
        <a className={`nav-item nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)} style={{ fontWeight: "bold", color: "#40423f" }}>Home</a>
        <a className={`nav-item nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)} style={{ fontWeight: "bold", color: "#40423f" }}>Jobs</a>
        <a className={`nav-item nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)} style={{ fontWeight: "bold", color: "#40423f" }}>S3 File Browser</a>
        <a className={`nav-item nav-link ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)} style={{ fontWeight: "bold", color: "#40423f" }}>Application</a>
      </nav>
      {activeTab === 1 && (
        <div className="alert alert-info" role="alert">
          This message only appears when the Home tab is active!
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bg-light">
        <SubHeader />
      </div>
      <main>
        {/* your main content goes here */}
      </main>
      <footer>
        {/* your footer content goes here */}
      </footer>
    </div>
  );
}

export default App;
