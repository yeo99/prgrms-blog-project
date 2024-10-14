import { axiosInstance } from '../src/lib/axiosInstance';

// 전체 게시글 가져오기
export const getPosts = async () => {
  const response = await axiosInstance.get('/posts');

  return response.data;
};

// 게시글 작성
export const addPost = async (content, author_id, password) => {
  const response = await axiosInstance.post('/posts', {
    content,
    author_id,
    password,
  });

  return response.data;
};

// 게시글 수정
export const editPost = async (postId, newContent, author_id, password) => {
  const response = await axiosInstance.put(`/posts/${postId}`, {
    newContent,
    author_id,
    password,
  });

  return response.data;
};

// 게시글 삭제
export const deletePost = async (postId, author_id, password) => {
  const response = await axiosInstance.delete(`/posts/${postId}`, {
    author_id,
    password,
  });

  return response.data;
};
