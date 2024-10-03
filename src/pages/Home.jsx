import { useState } from 'react';
import PostInput from '../components/PostInput';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>글 작성</h1>
      <PostInput addPost={addPost} />
      <PostList posts={posts} removePost={removePost} />
    </div>
  );
};

export default Home;
