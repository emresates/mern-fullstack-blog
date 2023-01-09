import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';

function Post() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo && <img src={PF + post.photo} alt="" />}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single-post-wrapper-title-input"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post-wrapper-title">
            {title}
            {post.username === user?.username && (
              <div className="single-post-wrapper-title-icons">
                <i
                  className="fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="single-post-wrapper-info">
          <span>
            Author:
            <Link className="author" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span>
            <i>{new Date(post.createdAt).toDateString()}</i>
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="single-post-wrapper-text-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="single-post-wrapper-text">{desc}</p>
        )}
        {updateMode && (
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
