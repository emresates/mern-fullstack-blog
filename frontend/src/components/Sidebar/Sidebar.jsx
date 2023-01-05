import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-item-title">Categories</span>
        <ul>
          <li>Life</li>
          <li>Music</li>
          <li>Style</li>
          <li>Sport</li>
          <li>Cinema</li>
          <li>Tech</li>
        </ul>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-item-title">Subscribe</span>
        <div className="sub">
          <input name="subs" type="text" placeholder="Your e-mail..." />
          <button type="button">
            <i className="arr-1 fa-solid fa-angles-right"></i>
            <i className="arr-2 fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-item-title">Follow Us</span>
        <div className="navbar-left-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
