import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <span>Login</span>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Your e-mail" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Your password" />
        <button type="submit">Login</button>
      </form>
      <h3>
        Don't you have an account. Visit{' '}
        <NavLink to="/register">register</NavLink> page
      </h3>
    </div>
  );
}

export default Login;
