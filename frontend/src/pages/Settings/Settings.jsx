import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
function Settings() {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settings-wrapper">
        <div className="settings-title">
          <span>Update Your Account</span>
          <span>Delete Your Account</span>
        </div>
        <form action="">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1672840087930-9717fd4f5609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Emre" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="test@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
