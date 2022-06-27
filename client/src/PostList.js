/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList({ title }) {
  const [posts, setPosts] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [title]);

  const renderedPosts = Object.values(posts).map((post) => {
    console.log("post", post);
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        <CommentList comments={post?.comments} active={active} />
        <CommentCreate postId={post.id} setActive={setActive} active={active} />
      </div>
    );
  });

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
}
