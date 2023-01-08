import React from 'react';
import PostCard from '../PostCard/PostCard';

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}

export default Posts;
