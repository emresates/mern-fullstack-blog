import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
  const PF = 'http://localhost:5000/images/';
  return (
    <div className="post-card">
      {post.photo ? (
        <img src={PF + post.photo} alt="" />
      ) : (
        <img
          src="https://images.unsplash.com/photo-1503980599186-9cc36eda351a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
          alt=""
        />
      )}
      <div className="post-card-info">
        <div className="post-cats">
          {post.categories.map((cat) => (
            <span className="post-cat">{cat.name}</span>
          ))}
        </div>
        <Link className="post-title" to={`/post/${post._id}`}>
          <span className="post-title">{post.title}</span>
        </Link>
        <div className="time-author">
          <span className="author">{post.username}</span>
          <span className="time">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="text">{post.desc}</p>
      </div>
    </div>
  );
}

export default PostCard;
