import React from 'react';

function SinglePost() {
  return (
    <div className="single-post">
      <img
        src="https://images.unsplash.com/photo-1503980599186-9cc36eda351a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80"
        alt=""
      />
      <div className="single-post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">aasd asdkasdj Lorem ipsum dolor sit.</span>
        <div className="time-author">
          <span className="author">Emre Ates</span>
          <span className="time">1 hour ago</span>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          hic praesentium eligendi debitis earum. Molestiae et inventore
          exercitationem nobis delectus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis hic praesentium eligendi debitis earum.
          Molestiae et inventore exercitationem nobis delectus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Blanditiis hic
          praesentium eligendi debitis earum. Molestiae et inventore
          exercitationem nobis delectus.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
