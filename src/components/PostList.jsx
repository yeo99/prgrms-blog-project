/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const listStyle = css`
  list-style: none;
  padding: 0;
`;

const listItemStyle = css`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

const buttonStyle = css`
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

const PostList = ({ posts, removePost }) => {
  return (
    <ul css={listStyle}>
      {posts.map((post, index) => (
        <li key={index} css={listItemStyle}>
          <span>{post}</span>
          <button css={buttonStyle} onClick={() => removePost(index)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
