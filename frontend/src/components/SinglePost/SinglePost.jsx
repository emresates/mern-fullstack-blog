import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function Post() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  // console.log(post);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo ? (
          <img src={post.photo} alt="" />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1506962240359-bd03fbba0e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80"
            alt=""
          />
        )}

        <h1 className="single-post-wrapper-title">
          {post.title}
          <div className="single-post-wrapper-title-icons">
            <i className="fa-regular fa-pen-to-square"></i>
            <i className="fa-regular fa-trash-can"></i>
          </div>
        </h1>
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
        <p className="single-post-wrapper-text">{post.desc}</p>
      </div>
    </div>
  );
}

export default Post;
