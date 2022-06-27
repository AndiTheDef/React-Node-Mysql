/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

export default function CommentList({ comments }) {
  console.log("comments", comments);
  const renderedPosts = Object.values(comments)?.map((item) => {
    return (
      <div key={item.id} style={{ width: "30%", marginBottom: "20px" }}>
        <ul>
          <li>{item.content}</li>
        </ul>
      </div>
    );
  });

  return <div className="d-flex justify-content-between">{renderedPosts}</div>;
}
