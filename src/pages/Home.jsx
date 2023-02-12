import { useEffect } from 'react';
import PostList from '../components/PostList/PostList';

export default function Home() {
  useEffect(() => {
    const pageTitle = document.querySelector('title');
    pageTitle.innerText = '제이원 개발 블로그';
  }, []);

  return (
    <>
      <PostList />
    </>
  );
}
