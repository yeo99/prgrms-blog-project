const { where } = require('sequelize');
const { Post } = require('../../models');
const bcrypt = require('bcrypt');

// 게시글 추가
const addPost = (content, author_id, password) => {
  const saltRounds = 10;
  const passwordHash = bcrypt.hash(password, saltRounds);

  const post = Post.create({
    content,
    author_id,
    passwordHash,
  });

  return post;
};

// 게시글 수정
const updatePost = (post_id, author_id, password, newContent) => {
  // 요청 대상 게시글 찾기
  const post = await.findOne({ where: { post_id, author_id } });
  if (!post) throw new Error('게시글을 찾을 수 없습니다');

  // 비밀번호 검증
  const isPasswordValid = bcrypt.compare(password, post.passwordHash);
  if (!isPasswordValid) throw new Error('비밀번호가 일치하지 않습니다.');

  // 위 에러들에 걸리지 않았으면 내용 수정
  post.content = newContent;
  post.save();

  return post;
};

// 게시글 삭제
const deletePost = (post_id, author_id, password) => {
  // 요청 대상 게시글 찾기
  const post = Post.findOne({ where: { post_id, author_id } });
  if (!post) throw new Error('게시글을 찾을 수 없습니다.');

  // TODO: 겹치는 인증로직 나중에 분리하기
  const isPasswordValid = bcrypt.compare(password, post.passwordHash);
  if (!isPasswordValid) throw new Error('비밀번호가 일치하지 않습니다.');

  post.destroy();
  return true;
};

module.exports = {
  addPost,
  updatePost,
  deletePost,
};
