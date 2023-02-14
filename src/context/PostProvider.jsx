import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../api/firebase';

const PostContext = createContext();

export function PostProvider({ children }) {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(['posts'], getAllPosts, {
    staleTime: 1000 * 6 * 5,
  });

  return <PostContext.Provider value={{ isLoading, error, posts }}>{children}</PostContext.Provider>;
}

export const usePostContext = () => useContext(PostContext);
