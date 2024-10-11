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

// 댓글 수정
const updateComment = async (req, res) => {
  const { id } = req.params;
  const { author_id, password, newContent } = req.body;

  try {
    const updatedComment = await commentService.updateComment(
      id,
      author_id,
      password,
      newContent
    );
    res.status(200).json(updatedComment); // 성공 시 수정된 댓글 반환
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addComment,
  updateComment,
};
