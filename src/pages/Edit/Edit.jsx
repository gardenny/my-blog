import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostEditor from '../../components/PostEditor/PostEditor';

export default function Edit() {
  const {
    state: { content },
  } = useLocation();

  useEffect(() => {
    const pageTitle = document.querySelector('title');
    pageTitle.innerText = `제이원 개발 블로그 | 게시글 수정하기`;
  }, []);

  return <PostEditor isEdit={true} targetPost={content} />;
}
