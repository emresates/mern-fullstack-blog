import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const url = 'https://test-backend.adaptable.app/backend';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(url + '/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="register">
      <span>Register</span>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {error && <h3>Something went wrong</h3>}
      </form>
      <h3>
        You already have an account. Visit <NavLink to="/login">login</NavLink>{' '}
        page
      </h3>
    </div>
  );
}

export default Register;
