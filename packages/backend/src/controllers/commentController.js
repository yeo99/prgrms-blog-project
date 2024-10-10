const commentService = require('../services/commentService');

// 댓글 추가
const addComment = async (req, res) => {
  const { id } = req.params;
  const { content, author_id, password } = req.body;

  try {
    const comment = await commentService.addComment(
      id,
      content,
      author_id,
      password
    );
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addComment,
};
