const express = require("express");
const Post = require("./models/Post");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.status(200).send({ ...posts, message: "posts retrieved successfully" });
});

router.post("/posts", async (req, res) => {
  console.log(req.body, Post);
  const { title, content } = req.body;
  const post = new Post({
    title,
    content,
  });
  await post.save();

  res.status(200).send({ ...post, message: "post is created successfully" });
  // }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.status(200).send({ post, message: "post retrieved successfully" });
  } catch (err) {
    res.status(404).send({ message: "Post does not exist" });
  }
});

router.patch("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    if (req.body.title) {
      post.title = req.body.title;
    }

    if (req.body.content) {
      post.content = req.body.content;
    }

    await post.save();
    res
      .status(200)
      .send({ post, status: 200, message: "post updated successfully" });
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = router;
