import { useQuery } from '@tanstack/react-query';
import styles from './PostList.module.css';

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
  const hasPosts = posts && posts.length > 0;

  if (isLoading) return <p>isLoading...</p>;
  if (error) return <NotFound />;
  return (
    <>
      {!hasPosts && <div className={styles.comment}>작성된 게시글이 없습니다.</div>}
      {hasPosts && (
        <ul className={styles.list}>
          <PostCard posts={posts} />
        </ul>
      )}
    </>
  );
}
