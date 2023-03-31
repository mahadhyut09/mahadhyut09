import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/home";
import Project from "./components/project";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from './components/footer'
function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navi">
          <a className="po navbar-brand ms-4 me-5" href="./"><h2>My portfolio</h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu" id="navbarNav">
            <ul className="navbar-nav ms-4">
              <li className="nav-item active ms-4">
                <a className="nav-link " href="./">Home </a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="./project">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;