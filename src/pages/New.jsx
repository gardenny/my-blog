import { useEffect } from 'react';
import PostEditor from '../components/PostEditor/PostEditor';

export default function New() {
  useEffect(() => {
    const pageTitle = document.querySelector('title');
    pageTitle.innerText = '제이원 개발 블로그 | 새 글쓰기';
  }, []);

  return <PostEditor />;
}
