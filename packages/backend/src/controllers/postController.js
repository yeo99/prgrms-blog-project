const postService = require('../services/postService');

const createPost = (req, res) => {
  const { content, author_id, password } = req.body;
  try {
    const post = postService.addPost(content, author_id, password);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { author_id, password, newContent } = req.body;
  console.log('id: ', id);
  console.log('author_id: ', author_id);

  try {
    const post = postService.updatePost(id, author_id, password, newContent);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = (req, res) => {
  const { id } = req.params;
  const { author_id, password } = req.body;

  try {
    postService.deletePost(id, author_id, password);
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
};
