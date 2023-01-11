import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [cats, setCats] = useState([]);

  const url = 'https://test-backend.adaptable.app/backend';
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(url + '/categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-item-title">Categories</span>
        <ul>
          {cats.map((c, key) => (
            <Link to={`/?cat=${c.name}`} key={key}>
              <li key={key}>{c.name}</li>
            </Link>
          ))}
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
