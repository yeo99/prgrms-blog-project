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

// 댓글 수정
const updateComment = async (id, author_id, password, newContent) => {
  // 댓글 찾기
  const comment = await Comment.findOne({
    where: { id, author_id },
  });
  if (!comment) throw new Error('댓글을 찾을 수 없습니다.');

  // 비밀번호 검증
  const isPasswordValid = await bcrypt.compare(password, comment.password_hash);
  if (!isPasswordValid) throw new Error('비밀번호가 일치하지 않습니다.');

  // 내용 수정
  comment.content = newContent;
  await comment.save();

  return comment;
};

// 댓글 삭제
const deleteComment = async (comment_id, author_id, password) => {
  const comment = await Comment.findOne({
    where: { id: comment_id, author_id },
  });
  if (!comment) throw new Error('댓글을 찾을 수 없습니다.');

  // 비밀번호 검증
  const isPasswordValid = await bcrypt.compare(password, comment.password_hash);
  if (!isPasswordValid) throw new Error('비밀번호가 일치하지 않습니다.');

  // 댓글 삭제
  await comment.destroy();
  return true;
};

module.exports = {
  addComment,
  updateComment,
  deleteComment,
};
