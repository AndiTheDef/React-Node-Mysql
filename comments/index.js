const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");

  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];
  console.log("comments", comments);
  comments.push({ id: commentId, content });
  console.log("comments1", comments);

  commentsByPostId[req.params.id] = comments;
  console.log("commentsByPostId", commentsByPostId);

  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log("lisening and started");
});
