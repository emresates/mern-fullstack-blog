import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-main">{props.page}</span>
        <span className="header-title-slogan">{props.slogan}</span>
      </div>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Header;
