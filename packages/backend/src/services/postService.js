const { where } = require('sequelize');
const { Post } = require('../../models');
const bcrypt = require('bcrypt');

// 게시글 추가
const addPost = async (content, author_id, password) => {
  const saltRounds = 10;
  const password_hash = await bcrypt.hash(password, saltRounds);

  const post = await Post.create({
    content,
    author_id,
    password_hash,
  });

  return post;
};

// 게시글 수정
const updatePost = async (id, author_id, password, newContent) => {
  // 요청 대상 게시글 찾기
  const post = await Post.findOne({ where: { id, author_id } });
  if (!post) throw new Error('게시글을 찾을 수 없습니다');

  // 비밀번호 검증
  const isPasswordValid = await bcrypt.compare(password, post.password_hash);
  if (!isPasswordValid) throw new Error('비밀번호가 일치하지 않습니다.');

  // 위 에러들에 걸리지 않았으면 내용 수정
  post.content = newContent;
  await post.save();

  return post;
};

// 게시글 삭제
const deletePost = async (post_id, author_id, password) => {
  // 요청 대상 게시글 찾기
  const post = await Post.findOne({ where: { post_id, author_id } });
  if (!post) throw new Error('게시글을 찾을 수 없습니다.');

  // TODO: 겹치는 인증로직 나중에 분리하기
  const isPasswordValid = await bcrypt.compare(password, post.password_hash);
  if (!isPasswordValid) throw new Error('비밀번호가 일치하지 않습니다.');

  await post.destroy();
  return true;
};

module.exports = {
  addPost,
  updatePost,
  deletePost,
};
