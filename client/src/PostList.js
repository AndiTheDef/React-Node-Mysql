/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
}