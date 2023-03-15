import React, { useState } from "react";
import "./navbar-comp-styles.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Port<span className="folio-text">folio</span>
      </a>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`navbar-nav ${isOpen ? "active" : ""}`}>
        <li className="nav-item">
          <a href="/" className="nav-link nav-home">
           <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            <span>About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
