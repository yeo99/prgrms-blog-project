import { axiosInstance } from '../src/lib/axiosInstance';

// 댓글 작성
export const addComment = async (postId, content, author_id, password) => {
  const response = await axiosInstance.post(`/comments/${postId}`, {
    content,
    author_id,
    password,
  });

  return response.data;
};

// 댓글 수정
export const editComment = async (postId, author_id, password, newContent) => {
  const response = await axiosInstance.put(`/comments/${postId}`, {
    author_id,
    password,
    newContent,
  });

  return response.data;
};

// 댓글 삭제
export const deleteComment = async (postId, author_id, password) => {
  const response = await axiosInstance.put(`/comments/${postId}`, {
    author_id,
    password,
  });

  return response.data;
};
