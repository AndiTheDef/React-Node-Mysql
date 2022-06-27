import React, { useState } from "react";
import axios from "axios";

export default function CommentCreate({ postId, setActive, active }) {
  const [content, setContent] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
    setActive(!active);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
