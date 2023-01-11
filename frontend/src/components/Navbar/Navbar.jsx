import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';

function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  //* Hide scrollbar when scroll down
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  var controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        //* if scroll down hide the navbar
        setShow(false);
      } else {
        //* if scroll up show the navbar
        setShow(true);
      }

      //* remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      //* cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  //* End of the scroll functions

  return (
    <div className={`navbar ${!show && 'hidden'}`}>
      <div className="navbar-left">
        <div className="navbar-left-profile">
          {user ? (
            user.profilePic ? (
              <Link to="/settings">
                <img src={PF + user.profilePic} alt="" />
              </Link>
            ) : (
              <Link to="/settings">
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                  alt=""
                />
              </Link>
            )
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item'
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item'
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
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
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item active' : 'nav-item'
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item'
                }
                to="/write"
              >
                Write
              </NavLink>
            </li>
          ) : (
            <li>
              <Link className="nav-item " to="/Login">
                Write
              </Link>
            </li>
          )}
          <li>
            <Link className="nav-item" onClick={handleLogout}>
              {user && 'Logout'}
            </Link>
          </li>
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
