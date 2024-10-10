const postService = require('../services/postService');

const createPost = (req, res) => {
  console.log('컨트롤러');
  const { content, author_id, password } = req.body;
  try {
    const post = postService.addPost(content, author_id, password);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = (req, res) => {
  const { post_id } = req.params;
  const { author_id, password, content } = req.body;

  try {
    const post = postService.updatePost(post_id, author_id, password);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = (req, res) => {
  const { post_id } = req.params;
  const { author_id, password } = req.body;

  try {
    postService.deletePost(post_id, author_id, password);
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
