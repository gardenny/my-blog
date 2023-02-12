import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../../api/firebase';

import NotFound from '../../pages/NotFound';
import PostCard from '../PostCard/PostCard';

export default function PostList() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(['posts'], getAllPosts, {
    staleTime: 1000 * 6 * 5,
  });

  if (isLoading) return <p>isLoading...</p>;
  if (error) return <NotFound />;
  return posts && <PostCard posts={posts} />;
}
