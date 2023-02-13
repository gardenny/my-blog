import { useQuery } from '@tanstack/react-query';
import styles from './PostList.module.css';

import { getAllPosts } from '../../api/firebase';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NotFound from '../../pages/NotFound';
import PostItem from '../PostItem/PostItem';

export default function PostList() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(['posts'], getAllPosts, {
    staleTime: 1000 * 6 * 5,
  });
  const hasPosts = posts && posts.length > 0;

  if (isLoading) return <LoadingSpinner />;
  if (error) return <NotFound />;
  return (
    <>
      {!hasPosts && <div className={styles.comment}>작성된 게시글이 없습니다.</div>}
      {hasPosts && posts.map((post, index) => <PostItem key={index} posts={post} />)}
    </>
  );
}
