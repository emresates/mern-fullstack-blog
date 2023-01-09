import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  //! Adding a post with photo
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    //* Photo part
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && <img src={URL.createObjectURL(file)} alt="" />}
      <form action="" className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button type="submit">Publish</button>
        </div>
      </form>
    </div>
  );
}

export default Write;
