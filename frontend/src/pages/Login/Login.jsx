import React from 'react';

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
        Don't you have an account. Visit <a href="/#">register</a> page
      </h3>
    </div>
  );
}

export default Login;
