const { Comment } = require('../../models');
const bcrypt = require('bcrypt');

// 댓글 추가
const addComment = async (post_id, content, author_id, password) => {
  const saltRounds = 10;
  const password_hash = await bcrypt.hash(password, saltRounds);

  const comment = await Comment.create({
    post_id,
    content,
    author_id,
    password_hash,
  });

  return comment;
};

module.exports = {
  addComment,
};
