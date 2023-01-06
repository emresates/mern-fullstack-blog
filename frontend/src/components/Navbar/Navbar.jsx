import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-left-profile">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            alt=""
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="navbar-left-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/write">
              Write
            </Link>
          </li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="navbar-right">
        <h1>
          <Link className="site-name" to="/">
            Blogify
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
