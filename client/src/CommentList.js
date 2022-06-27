/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentList({ postId, active }) {
  const [message, setMessage] = useState({});

  useEffect(() => {
    fetchPosts();
  }, [active]);

  const renderedPosts = Object.values(message).map((item) => {
    return (
      <div key={item.id} style={{ width: "30%", marginBottom: "20px" }}>
        <ul>
          <li>{item.content}</li>
        </ul>
      </div>
    );
  });

  const fetchPosts = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setMessage(res.data);
  };

  return <div className="d-flex justify-content-between">{renderedPosts}</div>;
}
