/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

const inputStyle = css`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

const buttonStyle = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PostInput = ({ addPost }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addPost(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        css={inputStyle}
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='새 게시글을 입력하세요'
      />
      <button css={buttonStyle} type='submit'>
        게시글 추가
      </button>
    </form>
  );
};

export default PostInput;
