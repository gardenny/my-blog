import React from 'react';
import styles from './PostDetail.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

// Toast 에디터
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism-dark.css';

import usePost from '../../hooks/usePost';
import PostInfo from '../../components/PostInfo/PostInfo';
import Button from '../../components/Button/Button';
import Profile from '../../components/Profile/Profile';
import getStringDate from '../../util/data';

export default function PostDetail() {
  const {
    state: {
      posts: { id, category, date, title, body },
    },
  } = useLocation();
  const { onRemove } = usePost();

  const navigate = useNavigate();
  const handleRemove = () => {
    if (window.confirm('게시글을 삭제하시겠습니까?')) {
      onRemove.mutate(id);
      alert('게시글이 삭제되었습니다.');
      navigate('/', { replace: true });
    }
  };

  return (
    <>
      <div className={styles.head}>
        <div className={styles.meta}>
          <PostInfo category={category} date={getStringDate(new Date(date))} />
          <div className={styles.btn_wrap}>
            <Button
              text={'수정하기'}
              padding="0.2rem"
              fontSize="0.75rem"
              onClick={() => navigate(`/posts/:${id}/edit`)}
            />
            <Button text={'삭제하기'} padding="0.2rem" fontSize="0.75rem" onClick={handleRemove} />
          </div>
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <Viewer plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} initialValue={body || ''} theme="dark" />
      <Profile />
    </>
  );
}
