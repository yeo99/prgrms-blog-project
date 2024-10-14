import { useQuery } from '@tanstack/react-query';
import { addComment } from '../services/comment';

export const useComments = (postId) => {
  return useQuery(['comments', postId], () => addComment(postId), {
    enabled: postId,
  });
};
