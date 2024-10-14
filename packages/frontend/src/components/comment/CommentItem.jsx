// src/components/CommentItem.jsx
import React from 'react';

const CommentItem = ({ comment }) => {
  return (
    <div
      style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px' }}
    >
      <div>댓글 작성자: {comment.author_id}</div>
      <div>{comment.content}</div>
      <div>{new Date(comment.createdAt).toLocaleString()}</div>
    </div>
  );
};

export default CommentItem;
