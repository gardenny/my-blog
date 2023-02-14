import styles from './PostList.module.css';

import { usePostContext } from '../../context/PostProvider';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NotFound from '../../pages/NotFound';
import PostItem from '../PostItem/PostItem';

export default function PostList() {
  const { isLoading, error, posts } = usePostContext();
  const hasPosts = posts && posts.length > 0;

  if (isLoading) return <LoadingSpinner />;
  if (error) return <NotFound />;
  return (
    <>
      {!hasPosts && <div className={styles.container}>작성된 게시글이 없습니다.</div>}
      {hasPosts && posts.map((post, index) => <PostItem key={index} posts={post} />)}
    </>
  );
}
