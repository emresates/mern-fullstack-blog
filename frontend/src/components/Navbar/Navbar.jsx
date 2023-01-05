import React from 'react';

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
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="navbar-center">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Write</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="navbar-right">
        <h1>Blogify</h1>
      </div>
    </div>
  );
}

export default Navbar;
