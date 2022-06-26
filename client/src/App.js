import React, { useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate setTitle={setTitle} title={title}/>
      <hr />
      <h1>Posts</h1>
      <PostList title={title}/>
    </div>
  );
};

export default App;
