import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../services/post';

export const usePosts = () => {
  return useQuery('posts', getPosts);
};
