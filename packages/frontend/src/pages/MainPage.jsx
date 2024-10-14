// src/pages/MainPage.jsx
import React from 'react';
import { usePosts } from '../hooks/usePosts';
import CommentList from '../components/comment/CommentList';

const MainPage = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts.</div>;

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>게시글 목록</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ccc',
            padding: '16px',
            marginBottom: '24px', // 게시글 간의 간격 설정
          }}
        >
          <div>
            <strong>글 작성자:</strong> {post.author_id}
          </div>
          <div>{post.content}</div>
          <div>{new Date(post.createdAt).toLocaleString()}</div>
          {/* 댓글 목록 렌더링 */}
          <CommentList comments={post.Comments} />
        </div>
      ))}
    </div>
  );
};

export default MainPage;
