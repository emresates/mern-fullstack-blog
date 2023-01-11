import axios from 'axios';
import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Context } from '../../context/Context';

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = 'https://test-backend.adaptable.app/images/';

  const url = 'https://test-backend.adaptable.app/backend';

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    //* Photo part
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post(url + '/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(url + '/users/' + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${url}/users/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: 'LOGOUT' });
    } catch (err) {}
  };

  return (
    <div className="settings">
      <Sidebar />
      <div className="settings-wrapper">
        <div className="settings-title">
          <span>Update Your Account</span>
          <span style={{ cursor: 'pointer' }} onClick={handleDelete}>
            Delete Your Account
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Update</button>
          {success && <span>Profile has been updated!</span>}
        </form>
      </div>
    </div>
  );
}

export default Settings;
