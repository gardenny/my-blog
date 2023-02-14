import styles from './PostList.module.css';

import PostItem from '../PostItem/PostItem';

export default function PostList({ postList }) {
  const hasPosts = postList && postList.length > 0;
  return (
    <>
      {!hasPosts && <div className={styles.container}>작성된 게시글이 없습니다.</div>}
      {hasPosts && postList.map((post, index) => <PostItem key={index} posts={post} />)}
    </>
  );
}
