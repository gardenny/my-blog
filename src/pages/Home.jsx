import { useCallback, useEffect, useState } from 'react';
import { usePostContext } from '../context/PostProvider';

import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import NotFound from '../pages/NotFound';
import PostList from '../components/PostList/PostList';
import SearchBar from '../components/SearchBar/SearchBar';

export default function Home() {
  const { isLoading, error, posts } = usePostContext();
  const [postList, setPostList] = useState([]);
  const renderPostList = useCallback(
    keyword => {
      if (keyword) {
        const searchList = posts.filter(post => post.title.includes(keyword));
        setPostList(searchList);
      } else {
        setPostList(posts);
      }
    },
    [posts]
  );

  useEffect(() => {
    const pageTitle = document.querySelector('title');
    pageTitle.innerText = '제이원 개발 블로그';
    renderPostList();
  }, [renderPostList]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <NotFound />;
  return (
    <>
      <SearchBar onSearch={renderPostList} />
      <PostList postList={postList} />
    </>
  );
}
