import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const url = 'https://test-backend.adaptable.app/backend';

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(url + '/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <span>Login</span>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Your username..."
          ref={userRef}
          autoFocus
        />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Your password" ref={passwordRef} />
        <button type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <h3>
        Don't you have an account. Visit{' '}
        <NavLink to="/register">register</NavLink> page
      </h3>
    </div>
  );
}

export default Login;
