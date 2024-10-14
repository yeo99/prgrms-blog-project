// src/components/CommentList.jsx
import React from 'react';
import CommentItem from './CommentItem';
import { useComments } from '../../hooks/useComment';

const CommentList = ({ postId }) => {
  const { data: comments, isLoading, error } = useComments(postId);

  if (isLoading) return <div>Loading comments...</div>;
  if (error) return <div>Error loading comments</div>;

  return (
    <div style={{ paddingLeft: '20px' }}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
