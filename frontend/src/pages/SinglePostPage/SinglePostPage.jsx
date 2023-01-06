import React from 'react';
import SinglePost from '../../components/SinglePost/SinglePost';
import Sidebar from '../../components/Sidebar/Sidebar';

function SinglePostPage() {
  return (
    <div className="single-post-page">
      <Sidebar />
      <SinglePost />
    </div>
  );
}

export default SinglePostPage;
