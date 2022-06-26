import React from "react";
import axios from "axios";

export default function PostCreate({ title, setTitle }) {

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4000/posts`, {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
