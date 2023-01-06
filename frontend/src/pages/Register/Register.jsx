import React from 'react';

function Login() {
  return (
    <div className="register">
      <span>Register</span>
      <form action="">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="D-mail" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" />
        <label htmlFor="">Retype Your Password</label>
        <input type="password" placeholder="Retype Password" />
        <button type="submit">Register</button>
      </form>
      <h3>
        You already have an account. Visit <a href="/#">login</a> page
      </h3>
    </div>
  );
}

export default Login;
