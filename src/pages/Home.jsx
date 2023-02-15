import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePostContext } from '../context/PostProvider';

import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import NotFound from './NotFound/NotFound';
import PostList from '../components/PostList/PostList';
import SearchBar from '../components/SearchBar/SearchBar';
import Toast from '../components/Toast/Toast';

export default function Home() {
  const { isLoading, error, posts } = usePostContext();
  const [postList, setPostList] = useState([]);
  const toast = useSelector(state => state.toast.toast);

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
      {toast && <Toast toast={toast} />}
    </>
  );
}
