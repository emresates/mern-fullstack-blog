import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-main">Home</span>
        <span className="header-title-slogan">Your Blogging Platform</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
        alt=""
      />
    </div>
  );
}

export default Header;
