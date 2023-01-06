import React from 'react';

function Write() {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1672761303639-3fd08db84dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <form action="" className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="write-input write-text"
          ></textarea>
          <button type="submit">Publish</button>
        </div>
      </form>
    </div>
  );
}

export default Write;
